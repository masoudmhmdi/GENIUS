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
    images: Blob[];
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
    description: string;
    images: Blob[];
    name: string;
    price: number;
    quantity: number;
    brand: string;
  };
};

export type IProductFromBack = {
  rating: {
    rate: number;
    count: number;
  };
  _id: string;
  category: {
    _id: string;
    name: string;
    icon: string;
    createdAt: string;
    updatedAt: string;
    slugname: string;
    __v: number;
  };
  subcategory: {
    _id: string;
    category: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    slugname: string;
    __v: number;
  };
  name: string;
  price: number;
  quantity: number;
  brand: string;
  description: string;
  thumbnail: string;
  images: string[];
  slugname: string;
};

export type IOrder = {
  _id: string;
  user: {
    _id: string;
    firstname: string;
    lastname: string;
    username: string;
    phoneNumber: string;
    address: string;
    role: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  products: {
    product: {
      rating: {
        rate: number;
        count: number;
      };
      _id: string;
      category: string;
      subcategory: string;
      name: string;
      price: 40;
      quantity: 23;
      brand: string;
      description: string;
      thumbnail: string;
      images: string[];
      createdAt: '2023-06-06T14:01:55.538Z';
      updatedAt: '2023-06-22T22:40:57.632Z';
      slugname: 'iphone-13-pro-max';
      __v: 1;
    };
    count: number;
    _id: string;
  }[];
  totalPrice: number;
  deliveryDate: string;
  deliveryStatus: boolean;
  createdAt: string;
  updatedAt: string;
};

type Cart = {
  id: string;
  count: number;
};

export type ICart = Cart[];
