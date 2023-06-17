import React from 'react';
import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import addNewProductService from './addNewProductService';
import { IAddProduct } from '@/types';
import { toast } from 'react-hot-toast';

function useAddNewProduct({ setOpen }: { setOpen: (arg: boolean) => void }) {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (data: IAddProduct['payload']) =>
      addNewProductService(data, setOpen),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['GetProduct'] });
    },
  });
}

export default useAddNewProduct;
