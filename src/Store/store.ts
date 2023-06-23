import { configureStore } from '@reduxjs/toolkit/';
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
  },
  devTools: true,
});
