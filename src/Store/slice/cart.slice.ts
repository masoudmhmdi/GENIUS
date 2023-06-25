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
    plusCount: (state, action) => {
      const newState = state.map((item) => {
        if (item.product._id === action.payload) {
          item.count < item.product.quantity && item.count + 1;
          return item;
        }
        return item;
      });

      return [...newState];
    },
    minusCount: (state, action) => {
      const newState = state.map((item) => {
        if (item.product._id === action.payload) {
          item.count > 1 && item.count - 1;
          return item;
        }
        return item;
      });

      return [...newState];
    },
  },
});

export const { addToCart, plusCount, minusCount } = cartSlice.actions;
const reducers = combineReducers({ cartSlice: cartSlice.reducer });
export const persistedReducer = persistReducer(persistConfig as any, reducers);
