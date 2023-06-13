import { serverReq } from '@/api/constants';

export async function getCategoryService() {
  const res = await serverReq('/categories');
  return res.data;
}

export default getCategoryService;
