import { useMutation } from '@tanstack/react-query';
import React from 'react';
import addNewOrderService from './addNewOrderService';
import { useSelector } from 'react-redux';
import { IOrder, RootState } from '@/types';
import { log } from 'console';

function useCreateNewOrder() {
  return useMutation({
    mutationFn: (serviceInput: IOrder['payload']) =>
      addNewOrderService(serviceInput),
  });
}

export default useCreateNewOrder;
