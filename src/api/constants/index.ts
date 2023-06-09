import axios, { AxiosError } from 'axios';
import Cookies from 'js-cookie';
import { cookies } from 'next/dist/client/components/headers';
import useNewAccessTokenService from '../services/useNewAccessToken';
import { newAccessTokenService } from '../services/useNewAccessToken/newAccessTokenService';
import { request } from 'http';

const baseURL = 'http://localhost:8000/api';

export const serverReq = axios.create({
  baseURL,
});

// serverReq.interceptors.request.use((req) => {
//   if (req.url !== 'auth/token') {
//     const accessToken = Cookies.get('accessToken');
//     serverReq.defaults.headers.common[
//       'Authorization'
//     ] = `Bearer ${accessToken}`;
//   }
//   return req;
// });

// serverReq.interceptors.response.use(
//   (res) => {
//     return res;
//   },
//   (err: AxiosError) => {
//     const status = err.request.status;
//     const config = err.config;

//     if (status === 401) {
//       if (config?.url === '/auth/token') {
//         Cookies.remove('accessToken');
//         Cookies.remove('refreshToken');
//         location.href = '/auth/login';
//         return;
//       } else if (config?.url !== 'auth/token') {
//         const refreshToken = Cookies.get('refreshToken') || '   ';
//         console.log(refreshToken);
//         newAccessTokenService(refreshToken).then((res: any) => {
//           const accToken = res.token?.accessToken;
//           const refToken = res.token?.refreshToken;
//           Cookies.set('accessToken', res.token?.accessToken);
//           Cookies.set('refreshToken', res.token?.refreshToken);
//           config!.headers.Authorization = `Bearer ${accToken}`;
//           return serverReq(config!);
//         });
//       }
//     }
//     return Promise.reject(err);
//   }
// );
