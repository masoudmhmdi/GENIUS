import { createSlice } from '@reduxjs/toolkit';

const modalAndToast = createSlice({
  name: 'ModalAndToast',
  initialState: { downDrawerOpen: false },
  reducers: {
    handleDowDrawer: (state, action) => {
      return { ...state, downDrawerOpen: action.payload };
    },
  },
});

export const { handleDowDrawer } = modalAndToast.actions;

export default modalAndToast.reducer;
