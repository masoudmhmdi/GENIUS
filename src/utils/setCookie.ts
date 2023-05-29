import { IRegisterData } from '@/types';
import { Router } from '@mui/icons-material';
import { Axios, AxiosResponse } from 'axios';
import cookie from 'js-cookie';

export const setCookie = (token: any) => {
  cookie.set('accessToken', token.accessToken);
  cookie.set('refreshToken', token.refreshToken);
};
