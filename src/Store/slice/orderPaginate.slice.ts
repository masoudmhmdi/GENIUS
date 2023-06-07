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
  },
});

export const { setPage } = orderPaginate.actions;

export default orderPaginate.reducer;
