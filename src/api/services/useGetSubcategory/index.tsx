import { Category } from '@/types';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import getSubcategoryService from './getSubcategoryService';

function useGetSubcategory(category: Category) {
  const { name, _id } = category;
  return useQuery({
    queryKey: ['getSubcategory', name],
    queryFn: () => getSubcategoryService(_id),
    enabled: false,
  });
}

export default useGetSubcategory;
