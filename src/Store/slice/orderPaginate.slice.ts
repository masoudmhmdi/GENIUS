import { createSlice } from '@reduxjs/toolkit';

type IInitState = {
  page: number;
  pageSize: number;
  deliveryStatus: boolean | string;
};

const orderPaginate = createSlice({
  name: 'orderPaginate',
  initialState: {
    page: 0,
    pageSize: 5,
    deliveryStatus: 'all',
  } as IInitState,
  reducers: {
    setPage: (state, action) => {
      return { ...state, ...action.payload };
    },
    changeStatus: (state, action) => {
      return { ...state, deliveryStatus: action.payload };
    },
  },
});

export const { setPage, changeStatus } = orderPaginate.actions;

export default orderPaginate.reducer;
