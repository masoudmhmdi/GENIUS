import { serverReq } from '@/api/constants';
import { AxiosError } from 'axios';
import React from 'react';
import { toast } from 'react-hot-toast';

async function editQuantityAndPrice(
  id: string,
  data: { quantity: number; price: number }
) {
  try {
    const res = await serverReq.patch(`products/${id}`, data);
    return res.data;
  } catch (error) {
    const err = error as AxiosError<{ massage: string }>;
    const { data, status, config } = err.response!;
    toast(data.massage);
  }
}

export default editQuantityAndPrice;
