import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { updateCollections } from '../../redux/shop/shopActions';

import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../CollectionPage/CollectionPage';
import WithSpinner from '../../components/WithSpinner/WithSpinner';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;

    // get collections data from firestore and set it in redux shop collections state
    const collectionRef = firestore.collection('collections');
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
      const shopCollections = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(shopCollections);
      this.setState({ isLoading: false });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromSnapshot && this.unsubscribeFromSnapshot();
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => <CollectionsPageWithSpinner isLoading={isLoading} {...props} />}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCollections: (shopCollections) => dispatch(updateCollections(shopCollections)),
  };
};

export default connect(null, mapDispatchToProps)(ShopPage);
