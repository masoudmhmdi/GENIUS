import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import React from 'react';
import { registerService } from './registerService';
import { IRegisterData } from '@/types';
import { AxiosError } from 'axios';

function useRegisterUser(
  options: UseMutationOptions<
    IRegisterData['payload'],
    AxiosError<IRegisterData['error']>,
    IRegisterData['response']
  >
) {
  return useMutation({ ...options, mutationFn: registerService });
}

export default useRegisterUser;
