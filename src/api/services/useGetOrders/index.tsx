import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import getOrdersService from './getOrdersService';

export const useGetOrders = () => {
  const [page, setPage] = useState(1);
  return useQuery({
    queryKey: ['orders', page],
    queryFn: () => getOrdersService(page),
    keepPreviousData: true,
  });
};
