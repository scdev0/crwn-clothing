import { cartActionTypes } from './cartActionTypes';

export const toggleCartHidden = () => {
  return {
    type: cartActionTypes.TOGGLE_CART_HIDDEN,
  };
};
