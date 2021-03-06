import { createSelector } from 'reselect';

// input selectors
const selectCart = (state) => state.cart;

// output selectors
export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);

export const selectCartHidden = createSelector([selectCart], (cart) => cart.hidden);

export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) => {
  return cartItems.reduce((accQuantity, cartItem) => accQuantity + cartItem.quantity, 0);
});

export const selectCartTotal = createSelector([selectCartItems], (cartItems) => {
  return cartItems.reduce(
    (accQuantity, cartItem) => accQuantity + cartItem.price * cartItem.quantity,
    0
  );
});
