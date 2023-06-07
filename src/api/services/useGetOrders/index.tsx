import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import getOrdersService from './getOrdersService';
import { useSelector } from 'react-redux';
import { store } from '@/Store/store';
import { RootState } from '@/types';
export const useGetOrders = () => {
  const { page, deliveryStatus, pageSize } = useSelector(
    (state: RootState) => state.orderPaginate
  );

  return useQuery({
    queryKey: ['orders', page, pageSize],
    queryFn: () => getOrdersService({ page, deliveryStatus, pageSize }),
    keepPreviousData: true,
  });
};
