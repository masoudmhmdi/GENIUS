import { serverReq } from '@/api/constants';
import { getProductQueryFnInput } from '@/types';

async function getProductService({ page, pageSize }: getProductQueryFnInput) {
  const res = await serverReq(
    `products?page=${
      page + 1
    }&limit=${pageSize}&fields=-rating,-createdAt,-updatedAt,-__v&sort=-price&quantity[gte]=8`
  );

  return res.data;
}

export default getProductService;
