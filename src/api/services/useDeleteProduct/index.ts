/* eslint-disable react-hooks/rules-of-hooks */
import { useMutation, useQueryClient } from '@tanstack/react-query';
import deleteProductService from './deleteProductService';

function useDeleteProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteProductService(id),
    onSuccess: (x) => {
      queryClient.invalidateQueries({ queryKey: ['GetProduct'] });
    },
  });
}

export default useDeleteProduct;
