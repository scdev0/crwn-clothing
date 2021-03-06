import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cartActions';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './CartIcon.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon'></ShoppingIcon>
      <span className='item-count'>{itemCount}</span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    itemCount: selectCartItemsCount(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
