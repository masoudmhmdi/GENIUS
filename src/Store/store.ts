import { configureStore } from '@reduxjs/toolkit/';
import orderPaginateSlice from './slice/orderPaginate.slice';

export const store = configureStore({
  reducer: {
    orderPaginate: orderPaginateSlice,
  },
  devTools: true,
});
