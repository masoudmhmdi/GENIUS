import { createSlice } from '@reduxjs/toolkit';

const toastReducer = createSlice({
  name: 'toast',
  initialState: { IsOpen: false },
  reducers: {
    setOpen: () => {
      return { IsOpen: true };
    },
    setClose: () => {
      return { IsOpen: false };
    },
  },
});

export default toastReducer;

export const { setClose, setOpen } = toastReducer.actions;
