import { persistedReducer } from './slice/cart.slice';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit/';
import orderPaginateSlice from './slice/orderPaginate.slice';
import productsSlice from './slice/products.slice';
import modalAndToast from './slice/modalAndToast.slice';
import singleCategory from './slice/singleCategory.slice';

export const store = configureStore({
  reducer: {
    orderPaginate: orderPaginateSlice,
    productsSlice,
    modalAndToast,
    singleCategory,
    persistedReducer,
  },
  devTools: true,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
