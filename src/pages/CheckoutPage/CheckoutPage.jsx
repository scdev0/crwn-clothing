import React from 'react';
import { connect } from 'react-redux';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cartSelectors';

import './CheckoutPage.scss';

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
      </div>
      {cartItems.map((cartItem) => cartItem.name)}
      <div className='total'>
        <span>TOTAL: ${total}</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state),
    total: selectCartTotal(state),
  };
};

export default connect(mapStateToProps)(CheckoutPage);
