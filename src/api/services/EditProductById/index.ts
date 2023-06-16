import { useMutation } from '@tanstack/react-query';
import editProductService from './editProductService';
import { IEditProduct } from '@/types';

function useEditSingleProduct() {
  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: IEditProduct['payload'];
    }) => {
      return editProductService(id, data);
    },
  });
}

export default useEditSingleProduct;
