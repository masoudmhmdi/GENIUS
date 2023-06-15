import React from 'react';
import { useMutation } from '@tanstack/react-query';
import addNewProductService from './addNewProductService';
import { IFile } from '@/Components/ImageUploader';
import { IAddProduct } from '@/types';


function useAddNewProduct() {
  
  return useMutation({
    mutationFn: (data: IAddProduct['payload']) => addNewProductService(data),
  });
}

export default useAddNewProduct;
