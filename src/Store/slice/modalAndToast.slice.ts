import { createSlice } from '@reduxjs/toolkit';

const modalAndToast = createSlice({
  name: 'ModalAndToast',
  initialState: { downDrawerOpen: false, deleteModal: false },
  reducers: {
    handleDowDrawer: (state, action) => {
      return { ...state, downDrawerOpen: action.payload };
    },
    handleDeleteModal: (state, action) => {
      return { ...state, deleteModal: action.payload };
    },
  },
});

export const { handleDeleteModal } = modalAndToast.actions;

export default modalAndToast.reducer;
