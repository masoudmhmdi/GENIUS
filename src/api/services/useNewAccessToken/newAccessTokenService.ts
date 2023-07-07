import { serverReq } from '@/api/constants';
import Cookies from 'js-cookie';

export const newAccessTokenService = async (refreshToken: string) => {
  try {
    console.log(refreshToken);
    const res = await serverReq.post<string>('/auth/token', {
      refreshToken: refreshToken,
    });
    return res;
  } catch (err) {
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
    location.href = '/auth/login';
  }
};
