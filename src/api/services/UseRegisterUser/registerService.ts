import { serverReq } from '@/api/constants';
import { IRegisterData } from '@/types';

export const registerService = async (data: IRegisterData['payload']) => {
  const res = await serverReq.post('/auth/signup', data);
  return res.data;
};
