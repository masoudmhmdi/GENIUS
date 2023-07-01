import { serverReq } from '@/api/constants';

async function getCategoryByIdService(id: string) {
  const res = await serverReq(`/categories/${id}`);
  return res.data;
}

export default getCategoryByIdService;
