import { serverReq } from '@/api/constants';
import { IAddProduct } from '@/types';
import { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-hot-toast';

export async function addNewProductService(data: IAddProduct['payload']) {
  const {
    brand,
    category,
    description,
    images,
    name,
    price,
    quantity,
    subcategory,
  } = data;
  const formData = new FormData();
  formData.append('name', name);
  formData.append('brand', brand);
  formData.append('category', category);
  formData.append('description', description);
  formData.append('price', price);
  formData.append('quantity', quantity);
  formData.append('subcategory', subcategory);
  images.map((i) => formData.append('images', i as any));
  console.log(formData);
  console.log(images);

  try {
    const res = await serverReq.post('/products', formData);
    return res.data;
  } catch (x: any) {
    toast(x.response.data.message);
  }
}

export default addNewProductService;
