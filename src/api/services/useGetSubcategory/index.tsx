import { Category } from '@/types';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import getSubcategoryService from './getSubcategoryService';

function useGetSubcategory(category?: Category) {
  return useQuery({
    enabled: false,
    queryKey: ['getSubcategory', category?.name],
    queryFn: () => getSubcategoryService(category?._id),
  });
}

export default useGetSubcategory;
