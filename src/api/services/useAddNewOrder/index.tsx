import { useMutation } from '@tanstack/react-query';
import React from 'react';
import addNewOrderService from './addNewOrderService';
import { useSelector } from 'react-redux';
import { IOrder, RootState } from '@/types';
import { log } from 'console';

function useCreateNewOrder() {
  let arrOfProducts: IOrder['payload']['products'] = [];

  const { cartSlice } = useSelector(
    (state: RootState) => state.persistedReducer
  );

  const userData = JSON.parse(localStorage.getItem('data')!);

  cartSlice.allCart.forEach((cart) => {
    const tempObj = {
      product: cart.product._id,
      count: cart.count,
    };
    arrOfProducts.push(tempObj);
  });

  const serviceInput: IOrder['payload'] = {
    user: userData.user._id,
    products: arrOfProducts,
    deliveryDate: cartSlice.deliveryDate,
    deliveryStatus: true,
  };
  return useMutation({
    mutationFn: () => addNewOrderService(serviceInput),
  });
}

export default useCreateNewOrder;
