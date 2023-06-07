import { createSlice } from '@reduxjs/toolkit';

const orderPaginate = createSlice({
  name: 'orderPaginate',
  initialState: { page: 0, pageSize: 5, deliveryStatus: true },
  reducers: {
    setPage: (state, action) => {
      console.log('payload:', action.payload);
      console.log('state:', state);

      return { ...state, ...action.payload };
    },
    changeStatus: (state) => {
      return { ...state, deliveryStatus: !state.deliveryStatus };
    },
  },
});

export const { setPage, changeStatus } = orderPaginate.actions;

export default orderPaginate.reducer;
