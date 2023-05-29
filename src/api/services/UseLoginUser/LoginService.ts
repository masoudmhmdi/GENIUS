import { serverReq } from '@/api/constants';
import { ILoginData } from '@/types';

export const loginService = async (data: ILoginData['payload']) => {
  const res = await serverReq.post<ILoginData['payload']>('/auth/login', data);
  return res.data;
};
