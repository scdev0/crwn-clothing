import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart } from '../../redux/cart/cartActions';

import './CheckoutItem.scss';

const CheckoutItem = ({ cartItem, clearItemFromCart }) => {
  const { name, description, imageUrl, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='description'>{description}</span>
      <span className='price'>${price}</span>
      <span className='quantity'>{quantity}</span>
      <div className='remove-button' onClick={() => clearItemFromCart(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
  };
};
export default connect(null, mapDispatchToProps)(CheckoutItem);
