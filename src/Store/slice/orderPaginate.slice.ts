import { createSlice } from '@reduxjs/toolkit';

const orderPaginate = createSlice({
  name: 'orderPaginate',
  initialState: 1,
  reducers: {
    nextPage: (state) => {
      return state + 1;
    },
    prevPage: (state) => {
      return state + 1;
    },
  },
});

export const { nextPage, prevPage } = orderPaginate.actions;

export default orderPaginate.reducer;
