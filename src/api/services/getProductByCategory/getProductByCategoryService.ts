import { serverReq } from '@/api/constants';

async function getProductByCategoryService(id: string) {
  const res = await serverReq(`products?page=1&limit=4&category=${id}`);
  return await res.data;
}

export default getProductByCategoryService;
