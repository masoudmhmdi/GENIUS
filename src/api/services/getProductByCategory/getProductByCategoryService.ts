import { serverReq } from '@/api/constants';

async function getProductByCategoryService(id: string) {
  const url = new URL('/products');
  url.searchParams.append('category', id);
  console.log(url);
  const res = await serverReq('/products');
  return res.data;
}

export default getProductByCategoryService;
