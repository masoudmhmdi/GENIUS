import { serverReq } from '@/api/constants';
import { IOrder } from '@/types';
import React from 'react';

async function addNewOrderService(orderData: IOrder['payload']) {
  const res = await serverReq.post('/orders', orderData);
  return res.data;
}

export default addNewOrderService;
