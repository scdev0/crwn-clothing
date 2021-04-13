import { connect } from 'react-redux';
import { compose } from 'redux';

import { selectShopIsLoaded } from '../../redux/shop/shopSelectors';

import WithSpinner from '../WithSpinner/WithSpinner';
import CollectionsOverview from './CollectionsOverview';

const mapStateToProps = (state) => {
  return {
    isLoading: !selectShopIsLoaded,
  };
};

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
