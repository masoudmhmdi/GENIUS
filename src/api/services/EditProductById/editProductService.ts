import { serverReq } from '@/api/constants';
import { IEditProduct } from '@/types';
import { AxiosError } from 'axios';
import { toast } from 'react-hot-toast';

async function editProductService(id: string, data: IEditProduct['payload']) {
  try {
    const res = await serverReq.patch(`products/${id}`, data);
    return res.data;
  } catch (error) {
    const err = error as AxiosError<{ massage: string }>;
    const { data, status, config } = err.response!;
    toast(data.massage);
  }
}

export default editProductService;
