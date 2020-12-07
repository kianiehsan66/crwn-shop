
import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollections = createSelector([selectShop],
    shop => shop.collections)

export const selectShopCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : null
)

export const selectIsFetching = createSelector([selectShop],
    shop => shop.isFetching);
export const selectIsFetched = createSelector([selectShop],
    shop => !!shop.collections);

export const selectCollection = collectionId => createSelector(
    [selectShopCollections],
    collections => collections ? collections[collectionId] : null
)


