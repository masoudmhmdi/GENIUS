import { useQuery } from '@tanstack/react-query';
import React from 'react';
import getProductByCategoryService from './getProductByCategoryService';

function useGetProductByCategory(id: string) {
  return useQuery({
    queryKey: ['getProductByCategory', id],
    queryFn: () => getProductByCategoryService(id),
  });
}

export default useGetProductByCategory;
