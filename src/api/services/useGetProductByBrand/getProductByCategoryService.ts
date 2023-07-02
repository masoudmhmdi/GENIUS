import { serverReq } from '@/api/constants';

async function getProductByBrandName(
  limit: string = '4',
  params?: { sort: string; brand: string },
  page?: string
) {
  const queryParams: any = {
    page,
    limit: limit,
  };

  if (params?.brand) queryParams['brand'] = params?.brand;
  if (params?.sort) queryParams['sort'] = params?.sort;

  const url = new URLSearchParams({ ...queryParams });

  const res = await serverReq(`/products?${url.toString()}`);
  return await res.data;
}

export default getProductByBrandName;
