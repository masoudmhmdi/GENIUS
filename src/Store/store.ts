import { configureStore } from '@reduxjs/toolkit/';
import orderPaginateSlice from './orderPaginate.slice';

export const store = configureStore({
  reducer: {
    orderPaginate: orderPaginateSlice,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
