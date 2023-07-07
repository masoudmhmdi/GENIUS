import { createSlice } from '@reduxjs/toolkit';

const modalAndToast = createSlice({
  name: 'ModalAndToast',
  initialState: {
    downDrawerOpen: false,
    deleteModal: false,
    selectedIdForDelete: '',
  },
  reducers: {
    handleDowDrawer: (state, action) => {
      return { ...state, downDrawerOpen: action.payload };
    },
    handleDeleteModal: (state, action) => {
      return { ...state, deleteModal: action.payload };
    },
    setId: (state, action) => {
      return { ...state, selectedIdForDelete: action.payload };
    },
  },
});

export const { handleDeleteModal, setId } = modalAndToast.actions;

export default modalAndToast.reducer;
