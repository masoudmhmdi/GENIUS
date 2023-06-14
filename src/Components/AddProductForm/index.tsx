import AuthLayout from '@/Layouts/AuthLayout/AuthLayout';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Link,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import Image from 'next/image';
import React, { ReactNode, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { Category, IAddProduct, ILoginData, IRegisterData } from '@/types';
import { error } from 'console';
import useLoginUser from '@/api/services/UseLoginUser';
import { handleAuthErr } from '@/utils/handleAuthErr';
import CircularProgress from '@mui/material/CircularProgress';
import { setCookie } from '@/utils/setCookie';
import { useRouter } from 'next/dist/client/router';
import { persistData } from '@/utils/persistData';
import useGetCategory from '@/api/services/useGetCategory';
import useGetSubcategory from '@/api/services/useGetSubcategory';
import Editor from '../Editor';

const schema = yup.object({
  category: yup.string().required('این فیلد ضروری است'),
  subcategory: yup.string().required('این فیلد ضروری است'),
});

function AddProductForm() {
  const router = useRouter();
  const [category, setCategory] = useState('');

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    setError,

    formState: { errors },
  } = useForm<IAddProduct['payload']>({
    resolver: yupResolver(schema),
  });

  const { data: categoryData } = useGetCategory();

  const { data: subCategoryData } = useGetSubcategory(category);
  const setEditorValue = (input: string) => {
    setValue('description', input);
  };
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '15px',
          paddingY: '60px',
        }}
        component={'form'}
        onSubmit={handleSubmit((i) => console.log(i))}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '15px',
          }}
        >
          <FormControl fullWidth sx={{ maxWidth: '400px' }}>
            <InputLabel
              sx={{ backgroundColor: 'white', paddingRight: '5px' }}
              id="demo-simple-select-label"
            >
              Category
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
          </FormControl>
          <FormControl fullWidth sx={{ maxWidth: '400px' }}>
            <InputLabel
              sx={{ backgroundColor: 'white', paddingRight: '5px' }}
              id="subCategory"
            >
              Category
            </InputLabel>
            <Select
              onChange={(e) =>
                setValue('subcategory', e.target.value as string)
              }
              labelId="subCategory"
              id="demo-simple-select"
              label="Age"
            >
              {subCategoryData?.data.subcategories.map((category: Category) => {
                return (
                  <MenuItem key={category._id} value={category._id}>
                    {category.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <Editor setEditorValue={setEditorValue} />
        </Box>
        <Button
          variant="contained"
          sx={{ maxWidth: '400px', borderRadius: '0', marginTop: '30px' }}
          fullWidth
          type="submit"
          color="success"
        >
          ورود
        </Button>
      </Box>
    </Box>
  );
}

export default AddProductForm;
