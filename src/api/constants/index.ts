import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';
import { cookies } from 'next/dist/client/components/headers';
import useNewAccessTokenService from '../services/useNewAccessToken';
import { newAccessTokenService } from '../services/useNewAccessToken/newAccessTokenService';
import { request } from 'http';

const baseURL = 'http://localhost:8000/api';

export const serverReq = axios.create({
  baseURL,
});

serverReq.interceptors.request.use((req) => {
  if (req.url !== 'auth/token') {
    const accessToken = Cookies.get('accessToken');
    serverReq.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${accessToken}`;
  }
  return req;
});

serverReq.interceptors.response.use(
  (res) => {
    return res;
  },
  (err: AxiosError) => {
    const status = err.request.status;
    const config: any = err.config;
    console.log(config.sent);
    if (status === 401 && !config.sent) {
      config.sent = true;
      if (config?.url !== '/auth/token') {
        console.log('hi');
        const refreshToken = Cookies.get('refreshToken') || '   ';
        newAccessTokenService(refreshToken).then((res: any) => {
          console.log(res);
          const accToken = res?.data.token?.accessToken;
          Cookies.set('accessToken', accToken);
          config!.headers.Authorization = `Bearer ${accToken}`;
          return serverReq(config!);
        });
      } else if (config.url === '/auth/token') {
        Cookies.remove('accessToken');
        Cookies.remove('refreshToken');
        location.href = '/auth/login';
      }
    }
  }
);
