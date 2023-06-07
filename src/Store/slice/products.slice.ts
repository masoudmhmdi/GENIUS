import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'productsSlice',
  initialState: {
    page: 0,
    pageSize: 5,
    name: 'asc',
    price: 'asc',
    quantity: 'asc',
    brand: 'asc',
  },
  reducers: {
    productSetPage: (state, action) => {
      return { ...state, ...action.payload };
    },
    handleSortingProducts: (state, { payload }) => {
      console.log(payload);
      const x = payload[0];
      if (payload.length) {
        return { ...state, [x.field]: x.sort };
      } else {
        return state;
      }
    },
  },
});

export const { productSetPage, handleSortingProducts } = productsSlice.actions;

export default productsSlice.reducer;
