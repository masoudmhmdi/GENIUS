import { serverReq } from '@/api/constants';

async function getProductByCategoryService(id: string) {
  const url = new URL('/products');
  url.searchParams.append('category', id);
  const res = await serverReq(url.toString());
  return res.data;
}

export default getProductByCategoryService;
