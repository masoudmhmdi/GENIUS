/* eslint-disable react-hooks/exhaustive-deps */
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
import React, { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { Category, IAddProduct, IEditProduct } from '@/types';
import { useRouter } from 'next/dist/client/router';
import useGetCategory from '@/api/services/useGetCategory';
import useGetSubcategory from '@/api/services/useGetSubcategory';
import Editor from '../Editor';
import ImageUploader from '../ImageUploader';
import useAddNewProduct from '@/api/services/useAddNewProduct';
import useEditSingleProduct from '@/api/services/EditProductById';
import Image from 'next/dist/client/image';

const schema = yup.object({
  category: yup.string().required('این فیلد ضروری است'),
  subcategory: yup.string().required('این فیلد ضروری است'),
  description: yup.string().required('این فیلد ضروری است'),
  name: yup.string().required('این فیلد ضروری است'),
  price: yup.number().required('این فیلد ضروری است'),
  quantity: yup.number().required('این فیلد ضروری است'),
  brand: yup.string().required('این فیلد ضروری است'),
});

function EditProductForm({
  productInfo,
  setOpen,
}: {
  productInfo: any;
  setOpen: (arg: boolean) => void;
}) {
  const {
    category: initialCategory,
    name,
    price,
    quantity,
    subcategory,
    description,
    images,
    brand,
  } = productInfo;
  const [category, setCategory] = useState(initialCategory._id);

  const [imagePreview, setImagePreview] = useState({
    show: true,
    imgData: images,
  });
  const { mutate } = useEditSingleProduct({ setOpen });

  console.log(initialCategory);

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    setError,
    control,
    formState: { errors },
  } = useForm<IAddProduct['payload']>({
    resolver: yupResolver(schema),
    defaultValues: {
      category: initialCategory._id,
      subcategory: subcategory._id,
      brand: brand,
      description: description,
      name: name,
      price: price,
      quantity: quantity,
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

  console.log(getValues('category'));

  const setImageData = (data: any) => {
    setValue('images', data);
    setImagePreview((prev) => {
      return { show: false, imgData: data };
    });
  };

  console.log(getValues('images'));
  return (
    <Box
      component={'form'}
      onSubmit={handleSubmit((input) =>
        mutate({ id: productInfo._id, data: input })
      )}
    >
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
            <Controller
              name="category"
              control={control}
              render={({ field }) => {
                return (
                  <Select
                    defaultValue={getValues('category')}
                    {...field}
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
                );
              }}
            />

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
            <Controller
              name="subcategory"
              control={control}
              render={({ field }) => {
                return (
                  <Select
                    defaultValue={getValues('subcategory')}
                    {...field}
                    onChange={(e) =>
                      setValue('subcategory', e.target.value as string)
                    }
                  >
                    {subCategoryData?.data.subcategories.map(
                      (category: Category) => {
                        return (
                          <MenuItem key={category._id} value={category._id}>
                            {category.name}
                          </MenuItem>
                        );
                      }
                    )}
                  </Select>
                );
              }}
            />
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
              type: 'number',
            }}
          />
          <TextField
            label="تعداد"
            error={!!errors.quantity}
            helperText={errors.quantity?.message}
            fullWidth
            InputProps={{
              ...register('quantity'),
              type: 'number',
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
            setImagePreview={setImagePreview}
          />
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {' '}
            {imagePreview.show &&
              imagePreview.imgData.map((img: string) => {
                return (
                  <Image
                    key={img}
                    alt={'product-img'}
                    width="100"
                    height="100"
                    src={img}
                  />
                );
              })}
          </Box>
        </Box>
      </Box>
      <Button type="submit" fullWidth variant="contained" color="success">
        اضافه شود
      </Button>
    </Box>
  );
}

export default EditProductForm;
