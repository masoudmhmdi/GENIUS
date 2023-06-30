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

type IState = {
  allCart: ICart;
  totalPrice: number;
  deliveryDate: number;
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    allCart: [],
    totalPrice: 0,
    deliveryDate: 0,
  } as IState,
  reducers: {
    addToCart: (state, action) => {
      return {
        ...state,
        allCart: [...state.allCart, action.payload],
      };
    },
    plusCount: (state, action) => {
      const newState = state.allCart.map((item) => {
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
      const total = newState.reduce((acc, item) => {
        const singleTotalPrice = +item.count * +item.product.price;
        return +acc + singleTotalPrice;
      }, 0);
      return {
        ...state,
        allCart: [...newState],
        totalPrice: total,
      };
    },
    minusCount: (state, action) => {
      const newState = state.allCart.map((item) => {
        if (item.product._id === action.payload) {
          const newItem = {
            ...item,
            count: item.count > 1 ? item.count - 1 : item.count,
          };

          return newItem;
        }
        return item;
      });
      const total = newState.reduce((acc, item) => {
        const singleTotalPrice = +item.count * +item.product.price;
        return +acc + singleTotalPrice;
      }, 0);
      return {
        ...state,
        allCart: [...newState],
        totalPrice: total,
      };
    },
    setPromoCode: (state, action) => {
      const total = state.allCart.reduce((acc, item) => {
        const singleTotalPrice = +item.count * +item.product.price;
        return +acc + singleTotalPrice;
      }, 0);
      const promoPresent = action.payload / 100;
      const result = total - total * promoPresent;
      return { ...state, totalPrice: result };
    },
    deleteProduct: (state, action) => {
      const deletedProducts = state.allCart.filter((product) => {
        console.log(product.product._id, '===', action.payload);
        return product.product._id !== action.payload;
      });
      const total = deletedProducts.reduce((acc, item) => {
        const singleTotalPrice = +item.count * +item.product.price;
        return +acc + singleTotalPrice;
      }, 0);
      return {
        ...state,
        allCart: deletedProducts,
        totalPrice: total,
      };
    },
    setDeliveryDate: (state, action) => {
      return {
        ...state,
        deliveryDate: action.payload,
      };
    },
    clearState: () => {
      return { allCart: [], totalPrice: 0, deliveryDate: 0 };
    },
  },
});

export const {
  addToCart,
  plusCount,
  minusCount,
  deleteProduct,
  setDeliveryDate,
  setPromoCode,
  clearState,
} = cartSlice.actions;
const reducers = combineReducers({ cartSlice: cartSlice.reducer });
export const persistedReducer = persistReducer(persistConfig as any, reducers);
