import React from 'react';
import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import addNewProductService from './addNewProductService';
import { IAddProduct } from '@/types';
import { toast } from 'react-hot-toast';

function useAddNewProduct(
  options: UseMutationOptions<IAddProduct['payload'], unknown, unknown>
) {
  const client = useQueryClient();
  return useMutation({
    ...options,
    mutationFn: (data: IAddProduct['payload']) => addNewProductService(data),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['GetProduct'] });
    },
  });
}

export default useAddNewProduct;
