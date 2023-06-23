import { useQuery } from '@tanstack/react-query';
import React from 'react';
import getProductByCategoryService from './getProductByCategoryService';
import { useSelector } from 'react-redux';
import { RootState } from '@/types';

function useGetProductByCategory(id: string, limit: number) {
  const params = useSelector((state: RootState) => state.singleCategory);
  return useQuery({
    queryKey: ['getProductByCategory', id],
    queryFn: () => getProductByCategoryService(id, limit, params),
  });
}

export default useGetProductByCategory;
