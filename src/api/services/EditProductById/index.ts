import { useMutation, useQueryClient } from '@tanstack/react-query';
import editProductService from './editProductService';
import { IEditProduct } from '@/types';

function useEditSingleProduct() {
  const client = useQueryClient();
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
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['GetProduct'] });
    },
  });
}

export default useEditSingleProduct;
