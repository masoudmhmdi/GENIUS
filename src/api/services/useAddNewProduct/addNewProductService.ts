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
  formData.append('price', `${price}`);
  formData.append('quantity', `${quantity}`);
  formData.append('subcategory', subcategory);
  console.log(images);

  images!.map((i) => formData.append('images', i));

  try {
    const res = await serverReq.post('/products', formData);
    toast('محصول با موفقیت اضافه شد', {
      style: { backgroundColor: 'green' },
    });
    return res.data;
  } catch (error) {
    const err = error as AxiosError<{ message: string; status: string }>;
    const { data } = err.response!;
    console.log(data);
    toast(data.message);
  }
}

export default addNewProductService;
