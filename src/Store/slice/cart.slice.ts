import { ICart } from '@/types';
import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'cartSlice',
  version: 1,
  storage,
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: [] as ICart,
  reducers: {
    addToCart: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { addToCart } = cartSlice.actions;
const reducers = combineReducers({ cartSlice: cartSlice.reducer });
export const persistedReducer = persistReducer(persistConfig as any, reducers);
