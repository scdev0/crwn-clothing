import { createSelector } from 'reselect';

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector([selectShop], (shop) => shop.collections);

// selectShopCollection returns a createSelector based on the collectionUrlParam passed in
export const selectShopCollection = (collectionUrlParam) => {
  return createSelector([selectShopCollections], (collections) =>
    collections.find((collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
  );
};
