import { store } from '@/Store/store';
import { AxiosError } from 'axios';

export type IRegisterData = {
  payload: {
    token: any;
    firstname: string;
    lastname: string;
    username: string;
    password: string;
    phoneNumber: string;
    address: string;
  };
  response: {
    status: string;
    token: {
      accessToken: string;
      refreshToken: string;
    };
    data: {
      user: {
        firstname: string;
        lastname: string;
        username: string;
        password: string;
        phoneNumber: string;
        address: string;
        role: string;
        _id: string;
        createdAt: string;
        updatedAt: string;
        __v: number;
        refreshToken: string;
      };
    };
  };
  error: AxiosError<{
    status: string;
    message: string;
  }>;
};

export type ILoginData = {
  payload: {
    username: string;
    password: string;
  };
  response: {
    status: string;
    token: {
      accessToken: string;
      refreshToken: string;
    };
    data: {
      user: {
        firstname: string;
        lastname: string;
        username: string;
        password: string;
        phoneNumber: string;
        address: string;
        role: string;
        _id: string;
        createdAt: string;
        updatedAt: string;
        __v: number;
        refreshToken: string;
      };
    };
  };
  error: AxiosError<{
    status: string;
    message: string;
  }>;
};

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type getProductQueryFnInput = {
  page: number;
  pageSize: number;
  field: string;
  sort: string;
};
