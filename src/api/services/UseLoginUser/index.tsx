import { ILoginData } from '@/types';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import React from 'react';
import { loginService } from './LoginService';

function useLoginUser(
  options: UseMutationOptions<
    ILoginData['payload'],
    ILoginData['error'],
    unknown
  >
) {
  return useMutation({
    ...options,
    mutationFn: loginService,
  });
}

export default useLoginUser;
