import { serverReq } from '@/api/constants';
import React from 'react';
import { toast } from 'react-hot-toast';

async function editDeliveryByIdService(id: string) {
  try {
    const res = await serverReq.patch(`/orders/${id}`, {
      deliveryStatus: true,
      deliveryDate: new Date(),
    });
    toast('محصول با موفقیت تحویل داده شد');
    return res.data;
  } catch (err) {
    console.log('service', err);
    // toast.error(err);
  }
}

export default editDeliveryByIdService;
