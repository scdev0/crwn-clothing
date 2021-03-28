import React from 'react';

import SHOP_DATA from './ShopPage.data';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    console.log(collections);
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => {
          return <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>;
        })}
      </div>
    );
  }
}

export default ShopPage;
