import { shopActionTypes } from './shopActionTypes';

export const updateCollections = (shopCollections) => {
  return {
    type: shopActionTypes.UPDATE_COLLECTIONS,
    payload: shopCollections,
  };
};
