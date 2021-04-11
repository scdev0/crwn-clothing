import React from 'react';
import { connect } from 'react-redux';

import { selectShopCollections } from '../../redux/shop/shopSelectors';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

const ShopPage = ({ collections }) => {
  return (
    <div className='shop-page'>
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    collections: selectShopCollections(state),
  };
};

export default connect(mapStateToProps)(ShopPage);
