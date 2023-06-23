import { serverReq } from '@/api/constants';

async function getProductByCategoryService(
  id: string,
  limit: number = 4,
  params?: any
) {
  let url = `products?page=1&limit=${limit}&category=${id}`;

  for (let x in params) {
    console.log(params[x]);

    if (params[x as any]) {
      url += `&${x}=${params[x]}`;
    }
  }

  const res = await serverReq(url);
  return await res.data;
}

export default getProductByCategoryService;
