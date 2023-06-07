import { useQuery } from '@tanstack/react-query';
import React from 'react';
import getProductService from './getProductservice';
import { useSelector } from 'react-redux';
import { RootState } from '@/types';

function useGetProducts() {
  const { page, pageSize } = useSelector(
    (state: RootState) => state.productsSlice
  );
  return useQuery({
    queryKey: ['GetProduct', page, pageSize],
    queryFn: () => getProductService({ page, pageSize }),
  });
}

export default useGetProducts;
