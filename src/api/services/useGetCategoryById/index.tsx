import { useQuery } from '@tanstack/react-query';
import getCategoryByIdService from './getCategoryByIdService';

export const useGetCategoryById = (id: string) => {
  return useQuery(['categoryInfo', id], () => {
    return getCategoryByIdService(id);
  });
};
