import { getProductQueryFnInput } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

const singleCategory = createSlice({
  name: 'singleCategory',
  initialState: { sort: '', brand: '' },
  reducers: {
    priceSetter: (state, action) => {
      return { ...state, sort: action.payload };
    },
    brandSetter: (state, action) => {
      return { ...state, sort: action.payload };
    },
  },
});

export const { brandSetter, priceSetter } = singleCategory.actions;

export default singleCategory.reducer;
