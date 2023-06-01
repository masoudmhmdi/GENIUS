import { serverReq } from '@/api/constants';

export const newAccessTokenService = async (refreshToken: string) => {
  const res = await serverReq.post<string>('/auth/token', refreshToken);
  return res;
};
