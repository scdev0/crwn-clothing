import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector([selectShop], (shop) => shop.collections);

export const selectShopCollectionsForPreview = createSelector(
  [selectShopCollections],
  (collections) => (collections ? Object.values(collections) : [])
);

// selectShopCollection returns a createSelector based on the collectionUrlParam passed in
export const selectShopCollection = (collectionUrlParam) => {
  return createSelector([selectShopCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );
};

export const selectShopIsFetching = createSelector([selectShop], (shop) => shop.isFetching);

export const selectShopIsLoaded = createSelector([selectShop], (shop) => !!shop.collections);
