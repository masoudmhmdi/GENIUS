import { configureStore } from '@reduxjs/toolkit/';
import orderPaginateSlice from './slice/orderPaginate.slice';
import productsSlice from './slice/products.slice';

export const store = configureStore({
  reducer: {
    orderPaginate: orderPaginateSlice,
    productsSlice,
  },
  devTools: true,
});
