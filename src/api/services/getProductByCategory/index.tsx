import { useQuery } from '@tanstack/react-query';
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
  console.log(router.asPath);

  const url = new URLSearchParams({ ...queryParams });
  const q = url.toString() ? '?' + url.toString() : '';
  console.log(router);
  return useQuery({
    queryKey: ['getProductByCategory', id, params.brand, params.sort],

    queryFn: () => getProductByCategoryService(id, limit, params),
    onSuccess: () => {
      router.replace(`${id}${q}`, undefined, {
        shallow: true,
      });
    },
  });
}

export default useGetProductByCategory;
