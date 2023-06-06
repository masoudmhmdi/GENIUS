import { createSlice } from '@reduxjs/toolkit';

const orderPaginate = createSlice({
  name: 'orderPaginate',
  initialState: { page: 1, pageSize: 10 },
  reducers: {
    setPage: (state, action) => {
      return { ...state, page: action.payload };
    },
  },
});

export const { setPage } = orderPaginate.actions;

export default orderPaginate.reducer;
