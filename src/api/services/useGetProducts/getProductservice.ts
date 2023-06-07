import { serverReq } from '@/api/constants';
import { getProductQueryFnInput } from '@/types';

async function getProductService({
  page,
  pageSize,
  price,
}: getProductQueryFnInput) {
  let URL = `products?page=${
    page + 1
  }&limit=${pageSize}&fields=-rating,-createdAt,-updatedAt,-__v&&quantity[gte]=8`;

  if (price) {
    console.log(price);
    price === 'asc' && (URL += '&sort=price');
    price === 'desc' && URL + '&sort=-price';
  }
  console.log(URL);
  const res = await serverReq(URL);

  return res.data;
}

export default getProductService;
