import { serverReq } from '@/api/constants';

async function getOrdersService(page: number) {
  const { data } = await serverReq.get(`/orders?page=${page}`);
  return data;
}

export default getOrdersService;
