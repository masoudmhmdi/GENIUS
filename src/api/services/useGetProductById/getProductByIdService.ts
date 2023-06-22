import { serverReq } from '@/api/constants';
import React from 'react';

async function getProductByIdService(id: string) {
  const res = await serverReq(`/products/${id}`);
  console.log(res.data);
  return res;
}

export default getProductByIdService;
