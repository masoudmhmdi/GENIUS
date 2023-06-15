import { serverReq } from '@/api/constants';
import { AxiosError } from 'axios';
import { toast } from 'react-hot-toast';

async function editProductService(id: string) {
  try {
    const res = await serverReq.patch(`products/${id}`);
    return res.data;
  } catch (error) {
    const err = error as AxiosError<{ massage: string }>;
    const { data, status, config } = err.response!;
    toast(data.massage);
  }
}

export default editProductService;
