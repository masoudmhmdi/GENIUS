import { ILoginData } from '@/types';

export const persistData = (data: ILoginData['response']) => {
  window.localStorage.setItem('data', JSON.stringify(data.data));
};
