import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import addNewProductService from './addNewProductService';
import { IAddProduct } from '@/types';
import { toast } from 'react-hot-toast';

function useAddNewProduct() {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (data: IAddProduct['payload']) => addNewProductService(data),
    onSuccess: () => {
      toast('محصول با موفقیت اضافه شد', {
        style: { backgroundColor: 'green' },
      });
      client.invalidateQueries({ queryKey: ['GetProduct'] });
    },
  });
}

export default useAddNewProduct;
