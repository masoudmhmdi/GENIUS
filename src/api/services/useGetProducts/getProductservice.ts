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
  }&limit=${pageSize}&fields=-rating,-createdAt,-updatedAt,-__v&&quantity[gte]=8`;
  let sortValue = '';

  if (field) {
    sort === `asc` ? (sortValue += `${field}`) : (sortValue += `-${field}`);
    URL += `&sort=${sortValue}`;
  }

  console.log(URL);
  const res = await serverReq(URL);

  return res.data;
}

export default getProductService;
