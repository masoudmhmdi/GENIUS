import { serverReq } from '@/api/constants';
import { getProductQueryFnInput } from '@/types';

async function getProductService({
  page,
  pageSize,
  field,
  sort,
}: getProductQueryFnInput) {
  let URL = `products?page=${
    page + 1
  }&limit=${pageSize}&fields=-rating,-createdAt,-updatedAt,-__v&&quantity[gte]=0&sort=-createdAt`;
  let sortValue = '';

  if (field) {
    sort === `asc` ? (sortValue += `${field}`) : (sortValue += `-${field}`);
    URL += `&sort=${sortValue}`;
  }

  const res = await serverReq(URL);

  return res.data;
}

export default getProductService;
