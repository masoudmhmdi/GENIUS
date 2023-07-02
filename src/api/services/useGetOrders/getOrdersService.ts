import { serverReq } from '@/api/constants';
type FnInput = {
  page: number;
  deliveryStatus: boolean | string;
  pageSize: number;
};
async function getOrdersService({ page, deliveryStatus, pageSize }: FnInput) {
  const url = new URLSearchParams();
  page && url.append('page', `${page + 1}`);
  deliveryStatus !== 'all' && url.append('deliveryStatus', `${deliveryStatus}`);
  pageSize && url.append('limit', `${pageSize}`);
  console.log(url.toString());
  const { data } = await serverReq.get(`/orders?${url.toString()}`);
  return data;
}

export default getOrdersService;
