import { useQueries, useMutation } from '@tanstack/react-query';
import React from 'react';
import editProductService from '../EditProductById/editProductService';
import { IEditProduct, IProductFromBack } from '@/types';
import { serverReq } from '@/api/constants';
import axios from 'axios';
import editQuantityAndPrice from './editQuantity&Price';
import { toast } from 'react-hot-toast';

function useParallelEditProduct() {
  return useMutation({
    mutationFn: async (products: IProductFromBack[]) => {
      try {
        const x = await axios.all(
          products.map((product) =>
            editQuantityAndPrice(product._id, {
              quantity: product.quantity,
              price: product.price,
            })
          )
        );
        toast('محصولات با موفقیت ویرایش شدند', {
          style: { backgroundColor: '#A4D0A4' },
        });
        return x;
      } catch (err) {
        console.log(err);
      }
    },
  });
}

export default useParallelEditProduct;
