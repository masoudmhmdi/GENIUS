import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'productsSlice',
  initialState: { page: 0, pageSize: 5, deliveryStatus: true },
  reducers: {
    productSetPage: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { productSetPage } = productsSlice.actions;

export default productsSlice.reducer;
