import { serverReq } from '@/api/constants';

export async function addNewProductService(data: unknown) {
  const res = await serverReq.post('/products', data);
  return res.data;
}

export default addNewProductService;
