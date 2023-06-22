import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { Category, IAddProduct } from '@/types';
import { useRouter } from 'next/dist/client/router';
import useGetCategory from '@/api/services/useGetCategory';
import useGetSubcategory from '@/api/services/useGetSubcategory';
import Editor from '../Editor';
import ImageUploader from '../ImageUploader';
import useAddNewProduct from '@/api/services/useAddNewProduct';

const schema = yup.object({
  category: yup.string().required('این فیلد ضروری است'),
  subcategory: yup.string().required('این فیلد ضروری است'),
  description: yup.string().required('این فیلد ضروری است'),
  name: yup.string().required('این فیلد ضروری است'),
  price: yup.number().required('این فیلد ضروری است'),
  quantity: yup.number().required('این فیلد ضروری است'),
  brand: yup.string().required('این فیلد ضروری است'),
  images: yup.array().required('این فیلد ضروری است'),
});

function AddProductForm({ setOpen }: { setOpen: (arg: boolean) => void }) {
  const router = useRouter();
  const [category, setCategory] = useState('');
  const { mutate } = useAddNewProduct({ setOpen: setOpen });

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    setError,

    formState: { errors },
  } = useForm<IAddProduct['payload']>({
    resolver: yupResolver(schema),
    defaultValues: {
      category: '',
      subcategory: '',
      brand: '',
      description: '',
      name: '',
      price: 0,
      quantity: 0,
    },
  });

  const { data: categoryData } = useGetCategory();

  const { data: subCategoryData } = useGetSubcategory(category);
  const setEditorValue = (input: string) => {
    setValue('description', input);
  };
  const getEditorValue = () => {
    return getValues('description');
  };

  return (
    <Box component={'form'} onSubmit={handleSubmit((input) => mutate(input))}>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
          paddingY: '40px',
          gap: '30px',
        }}
      >
        <Box
          sx={{
            width: {
              xs: '100%',
              md: '40%',
            },
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
          }}
        >
          <FormControl fullWidth error={!!errors.category}>
            <InputLabel
              sx={{ backgroundColor: 'white', paddingRight: '5px' }}
              id="demo-simple-select-label"
            >
              دسته بندی
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="category"
              inputProps={{ ...register('category') }}
              // value={getValues('category')}
              onChange={(e) => {
                setValue('category', e.target.value as string);
                setCategory(e.target.value as string);
              }}
            >
              {categoryData?.data.categories.map((category: Category) => {
                return (
                  <MenuItem key={category._id} value={category._id}>
                    {category.name}
                  </MenuItem>
                );
              })}
            </Select>
            <Typography color="error" fontSize={'12px'}>
              {errors.category?.message}
            </Typography>
          </FormControl>
          <FormControl fullWidth error={!!errors.subcategory}>
            <InputLabel
              sx={{ backgroundColor: 'white', paddingRight: '5px' }}
              id="subCategory"
            >
              زیر دسته بندی
            </InputLabel>
            <Select
              onChange={(e) =>
                setValue('subcategory', e.target.value as string)
              }
              labelId="subCategory"
              id="demo-simple-select"
              label="Age"
              inputProps={{ ...register('subcategory') }}
            >
              {subCategoryData?.data.subcategories.map((category: Category) => {
                return (
                  <MenuItem key={category._id} value={category._id}>
                    {category.name}
                  </MenuItem>
                );
              })}
            </Select>
            <Typography color="error" fontSize={'12px'}>
              {errors.subcategory?.message}
            </Typography>
          </FormControl>
          <TextField
            label="نام"
            error={!!errors.name}
            helperText={errors.name?.message}
            fullWidth
            InputProps={{
              ...register('name'),
            }}
          />
          <TextField
            label="قیمت"
            error={!!errors.price}
            helperText={errors.price?.message}
            fullWidth
            InputProps={{
              ...register('price'),
            }}
          />
          <TextField
            label="تعداد"
            error={!!errors.quantity}
            helperText={errors.quantity?.message}
            fullWidth
            InputProps={{
              ...register('quantity'),
            }}
          />
        </Box>
        <Box
          sx={{
            width: {
              xs: '100%',
              md: '60%',
            },
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
          }}
        >
          <TextField
            label="برند"
            error={!!errors.brand}
            helperText={errors.brand?.message}
            fullWidth
            InputProps={{
              ...register('brand'),
            }}
          />
          <Editor
            errMassage={errors.description?.message}
            value={getEditorValue}
            setEditorValue={setEditorValue}
          />

          <ImageUploader
            helperText={errors.images?.message}
            setValue={setValue}
          />
        </Box>
      </Box>
      <Button type="submit" fullWidth variant="contained" color="success">
        اضافه شود
      </Button>
    </Box>
  );
}

export default AddProductForm;
