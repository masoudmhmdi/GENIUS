import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { newAccessTokenService } from './newAccessTokenService';

function useNewAccessTokenService(
  options: UseMutationOptions<string, AxiosError, unknown>
) {
  return useMutation({ ...options, mutationFn: newAccessTokenService });
}

export default useNewAccessTokenService;
