import { ILoginData } from '@/types';

export const persistData = (data: ILoginData['response']) => {
  console.log(data);
  window.localStorage.setItem('data', JSON.stringify(data.data));
};
