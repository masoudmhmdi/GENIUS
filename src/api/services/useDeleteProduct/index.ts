/* eslint-disable react-hooks/rules-of-hooks */
import { useMutation, useQueryClient } from '@tanstack/react-query';
import deleteProductService from './deleteProductService';

function useDeleteProduct() {
  return useMutation({
    mutationFn: (id: string) => deleteProductService(id),
    onSuccess: () => {
      const queryClient = useQueryClient();
      queryClient.invalidateQueries({ queryKey: ['GetProduct'] });
    },
  });
}

export default useDeleteProduct;
