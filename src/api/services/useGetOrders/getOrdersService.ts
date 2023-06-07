import { serverReq } from '@/api/constants';
type FnInput = {
  page: number;
  deliveryStatus: boolean;
  pageSize: number;
};
async function getOrdersService({ page, deliveryStatus, pageSize }: FnInput) {
  const { data } = await serverReq.get(
    `/orders?page=${
      page + 1
    }&limit=${pageSize}&deliveryStatus=${deliveryStatus}`
  );
  return data;
}

export default getOrdersService;
