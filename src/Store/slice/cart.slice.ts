import { ICart } from '@/types';
import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { toast } from 'react-hot-toast';

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
          const newItem = {
            ...item,
            count:
              item.count < item.product.quantity ? item.count + 1 : item.count,
          };
          if (item.count === item.product.quantity) {
            toast(
              'شما حداکتر موجودی این محصول را  به سبد خرید خود اضافه کرده اید'
            );
          }
          console.log(newItem.count);
          return newItem;
        }
        return item;
      });

      return [...newState];
    },
    minusCount: (state, action) => {
      const newState = state.map((item) => {
        if (item.product._id === action.payload) {
          const newItem = {
            ...item,
            count: item.count > 1 ? item.count - 1 : item.count,
          };

          return newItem;
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
