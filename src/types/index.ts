import { store } from '@/Store/store';
import { GridSortDirection } from '@mui/x-data-grid';
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
  sort: GridSortDirection;
};

export type Category = {
  _id: string;
  name: string;
  icon: string;
  createdAt: string;
  updatedAt: string;
  slugname: string;
};

export type IAddProduct = {
  payload: {
    category: string;
    subcategory: string;
    description: string;
    images: unknown;
    name: string;
    price: number;
    quantity: number;
    brand: string;
  };
  response: {
    status: string;
    data: {
      product: {
        category: string;
        subcategory: string;
        name: string;
        price: number;
        quantity: number;
        brand: string;
        description: string;
        thumbnail: string;
        images: string[];
        rating: {
          rate: number;
          count: number;
        };
        _id: string;
        createdAt: string;
        updatedAt: string;
        slugname: string;
        __v: number;
      };
    };
  };
};

export type IEditProduct = {
  payload: {
    category: string;
    subcategory: string;
    name: string;
    price: number;
    quantity: number;
    brand: string;
    images?: any;
  };
};
