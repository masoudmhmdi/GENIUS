import { serverReq } from '@/api/constants';

async function getProductService() {
  const res = await serverReq(
    'products?page=1&limit=4&fields=-rating,-createdAt,-updatedAt,-__v&sort=-price&quantity[gte]=8'
  );

  return res.data;
}

export default getProductService;
