import { serverReq } from '@/api/constants';

function getOrdersService(page: number) {
  const res = serverReq.get(`/orders?page=${page}`);
  return res;
}

export default getOrdersService;
