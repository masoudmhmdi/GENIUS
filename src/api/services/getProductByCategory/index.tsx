import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import React from 'react';
import getProductByCategoryService from './getProductByCategoryService';
import { useSelector } from 'react-redux';
import { RootState } from '@/types';
import { useRouter } from 'next/router';

function useGetProductByCategory(id: string, limit: string) {
  const params = useSelector((state: RootState) => state.singleCategory);
  const router = useRouter();
  const queryParams: any = {};

  if (params?.brand) queryParams['brand'] = params?.brand;
  if (params?.sort) queryParams['sort'] = params?.sort;

  const url = new URLSearchParams({ ...queryParams });
  const q = url.toString() ? '?' + url.toString() : '';

  return useInfiniteQuery({
    queryKey: ['getProductByCategory', id, params.brand, params.sort],
    queryFn: ({ pageParam }) =>
      getProductByCategoryService(id, limit, params, pageParam),
    getNextPageParam: (lastPage, allPage) => {
      return lastPage.data.products.length ? allPage.length + 1 : undefined;
    },
    onSuccess: () => {
      router.replace(`${id}${q}`, undefined, {
        shallow: true,
      });
    },
  });
}

export default useGetProductByCategory;
