import SHOP_DATA from '../../pages/ShopPage/ShopPage.data';

import { shopActionTypes } from './shopActionTypes';

const INITIAL_STATE = {
  collections: SHOP_DATA,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        oollections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
