import { serverReq } from '@/api/constants';

export default async function getSubcategoryService(categoryId?: string) {
  const res = await serverReq(`subcategories?category=${categoryId || ''}`);

  return res.data;
}
