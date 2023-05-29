import { configureStore } from '@reduxjs/toolkit/';
import toastReducer from './toast.slice';

export const store = configureStore({
  reducer: {
    toast: toastReducer.reducer,
  },
  devTools: true,
});
