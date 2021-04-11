import React from 'react';
import { connect } from 'react-redux';

import { selectShopCollectionsForPreview } from '../../redux/shop/shopSelectors';

import CollectionPreview from '../CollectionPreview/CollectionPreview';

import './CollectionsOverview.scss';

const CollectionsOverview = ({ collections }) => {
  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    collections: selectShopCollectionsForPreview(state),
  };
};

export default connect(mapStateToProps)(CollectionsOverview);
