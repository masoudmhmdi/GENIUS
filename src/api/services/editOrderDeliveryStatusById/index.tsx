import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import editDeliveryByIdService from './editDeliverySercise';

function useEndDelivery() {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => {
      return editDeliveryByIdService(id);
    },
    onSuccess: () => {
      client.invalidateQueries({
        queryKey: ['orders'],
      });
    },
  });
}

export default useEndDelivery;
