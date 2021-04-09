import { createSelector } from 'reselect';

// input selectors
const selectCart = (state) => state.cart;

// output selector
export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);

export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) => {
  return cartItems.reduce((accQuantity, cartItem) => accQuantity + cartItem.quantity, 0);
});
