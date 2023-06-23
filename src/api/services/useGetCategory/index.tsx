import { useQuery } from '@tanstack/react-query';
import React from 'react';
import getCategoryService from './getCategorySercive';

function useGetCategory() {
  return useQuery({
    queryKey: ['getCategory'],
    queryFn: getCategoryService,
  });
}

export default useGetCategory;
