import { getProductQueryFnInput } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'productsSlice',
  initialState: {
    page: 0,
    pageSize: 5,
    field: '',
    sort: null,
  },
  reducers: {
    productSetPage: (state, action) => {
      return { ...state, ...action.payload };
    },
    handleSortingProducts: (state, { payload }) => {
      const [payloadObj] = payload;

      if (payloadObj) {
        return { ...state, field: payloadObj.field, sort: payloadObj.sort };
      } else {
        return { ...state, field: undefined, sort: undefined };
      }
    },
  },
});

export const { productSetPage, handleSortingProducts } = productsSlice.actions;

export default productsSlice.reducer;
