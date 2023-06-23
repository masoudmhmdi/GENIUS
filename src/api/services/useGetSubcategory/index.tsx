import { Category } from '@/types';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import getSubcategoryService from './getSubcategoryService';

function useGetSubcategory(id?: string) {
  return useQuery({
    queryKey: ['getSubcategory', id],
    queryFn: () => getSubcategoryService(id!),
    enabled: !!id,
  });
}

export default useGetSubcategory;
