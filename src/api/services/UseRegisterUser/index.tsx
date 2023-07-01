import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import React from 'react';
import { registerService } from './registerService';
import { IRegisterData } from '@/types';
import { AxiosError, AxiosResponse } from 'axios';

function useRegisterUser(
  options: UseMutationOptions<
    IRegisterData['payload'],
    IRegisterData['error'],
    IRegisterData['response']
  >
) {
  return useMutation({ ...options, mutationFn: registerService as any });
}

export default useRegisterUser;
