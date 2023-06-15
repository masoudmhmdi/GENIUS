import { useMutation } from '@tanstack/react-query';
import editProductService from './editProductService';

function useEditSingleProduct() {
  return useMutation({
    mutationFn: (id: string) => {
      return editProductService(id);
    },
  });
}

export default useEditSingleProduct;
