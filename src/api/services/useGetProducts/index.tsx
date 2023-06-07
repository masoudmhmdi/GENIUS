import { useQuery } from '@tanstack/react-query';
import React from 'react';
import getProductService from './getProductservice';

function useGetProducts() {
  return useQuery({
    queryKey: ['GetProduct'],
    queryFn: () => getProductService(),
  });
}

export default useGetProducts;
