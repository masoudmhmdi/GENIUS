import { serverReq } from '@/api/constants';

async function getProductByCategoryService(
  id: string,
  limit: string = '4',
  params?: any
) {
  // let url = `products?page=1&limit=${limit}&category=${id}`;
  const queryParams = {
    page: '1',
    limit,
    category: id,
  };

  const url = new URLSearchParams(queryParams);

  // for (let x in params) {
  //   console.log(params[x]);

  //   if (params[x as any]) {
  //     url += `&${x}=${params[x]}`;
  //   }
  // }

  const res = await serverReq(`/products?${url.toString()}`);
  return await res.data;
}

export default getProductByCategoryService;
