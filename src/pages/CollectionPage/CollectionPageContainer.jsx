import { connect } from 'react-redux';
import { compose } from 'redux';

import { selectShopIsLoaded } from '../../redux/shop/shopSelectors';

import WithSpinner from '../../components/WithSpinner/WithSpinner';
import CollectionPage from './CollectionPage';

const mapStateToProps = (state) => {
  return {
    isLoading: !selectShopIsLoaded(state),
  };
};

const CollectionPageContainer = compose(connect(mapStateToProps), WithSpinner)(CollectionPage);

export default CollectionPageContainer;
