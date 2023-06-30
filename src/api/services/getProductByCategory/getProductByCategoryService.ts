import { serverReq } from '@/api/constants';

async function getProductByCategoryService(
  id: string,
  limit: string = '4',
  params?: { sort: string; brand: string }
) {
  // let url = `products?page=1&limit=${limit}&category=${id}`;
  const queryParams: any = {
    page: '1',
    limit: limit,
    category: id,
  };
  console.log(params);
  if (params?.brand) queryParams['brand'] = params?.brand;
  if (params?.sort) queryParams['sort'] = params?.sort;

  console.log(queryParams);
  const url = new URLSearchParams({ ...queryParams });

  // for (let x in queryParams) {
  //   if (params[x as any]) {
  //     url.append(x, queryParams[x]);
  //   }
  // }

  console.log(url.toString());

  const res = await serverReq(`/products?${url.toString()}`);
  return await res.data;
}

export default getProductByCategoryService;
