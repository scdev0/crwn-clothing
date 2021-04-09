import React from 'react';

import './CartItem.scss';

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => {
  return (
    <div className='cart-item'>
      <img src={imageUrl} alt={name} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          ${price} x {quantity}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
