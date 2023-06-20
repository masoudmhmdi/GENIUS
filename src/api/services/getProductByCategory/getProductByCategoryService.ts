import { serverReq } from '@/api/constants';

async function getProductByCategoryService(id: string, limit: number = 4) {
  const res = await serverReq(`products?page=1&limit=${limit}&category=${id}`);
  return await res.data;
}

export default getProductByCategoryService;
