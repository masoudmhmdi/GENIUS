import { serverReq } from '@/api/constants';
import { Axios, AxiosError } from 'axios';
import { toast } from 'react-hot-toast';

export async function deleteProductService(id: string) {
  try {
    const res = await serverReq.delete(`products/${id}`);
    return res.data;
  } catch (error) {
    const err = error as AxiosError<{ massage: string }>;
    const { data, status, config } = err.response!;
    toast(data.massage);
  }
}

export default deleteProductService;
