import { ILoginData, IRegisterData } from '@/types';
import { AxiosError } from 'axios';
import { toast } from 'react-hot-toast';

export const handleAuthErr = ({
  setError,
  err,
}: {
  setError: any;
  err: AxiosError<{ status: string; message: string }>;
}) => {
  switch (err.response?.status) {
    case 400: {
      const massage = err.response.data.message;
      const field = massage.split(`"`)[1];
      setError(field as keyof IRegisterData['payload'], {
        message: massage,
      });
      break;
    }

    default: {
      console.log('default');
      toast(err.response?.data.message as string);
    }
  }
};
