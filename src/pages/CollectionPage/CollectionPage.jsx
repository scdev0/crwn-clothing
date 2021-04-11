import React from 'react';
import { connect } from 'react-redux';

import { selectShopCollection } from '../../redux/shop/shopSelectors';

import CollectionItem from '../../components/CollectionItem/CollectionItem';

import './CollectionPage.scss';

const CollectionPage = ({ collection }) => {
  return (
    <div className='collection-page'>
      <h2>COLLECTION PAGE</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    collection: selectShopCollection(ownProps.match.params.collectionId)(state),
  };
};

export default connect(mapStateToProps)(CollectionPage);
