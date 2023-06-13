import AuthLayout from '@/Layouts/AuthLayout/AuthLayout';
import { Box, Button, Link, TextField } from '@mui/material';
import Image from 'next/image';
import React, { ReactNode } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { ILoginData, IRegisterData } from '@/types';
import { error } from 'console';
import useLoginUser from '@/api/services/UseLoginUser';
import { handleAuthErr } from '@/utils/handleAuthErr';
import CircularProgress from '@mui/material/CircularProgress';
import { setCookie } from '@/utils/setCookie';
import { useRouter } from 'next/dist/client/router';
import { persistData } from '@/utils/persistData';

const schema = yup.object({
  username: yup.string().required('این فیلد ضروری است'),
  password: yup.string().required('این فیلد ضروری است'),
});

function AddProductForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ILoginData['payload']>({
    resolver: yupResolver(schema),
  });

  const { mutate, isLoading } = useLoginUser({
    onSuccess: (res: any) => {
      const { token } = res;
      setCookie(token);
      persistData(res);
      router.push('/');
    },
    onError: (err) => {
      handleAuthErr({ setError, err });
    },
  });

  const submitHandler = (d: ILoginData['payload']) => {
    mutate(d);
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
        onSubmit={handleSubmit(submitHandler)}
      >
        <TextField
          label="نام کاربری"
          inputProps={{ ...register('username') }}
          error={!!errors.username}
          helperText={errors.username?.message}
          fullWidth
          sx={{
            maxWidth: '400px',
          }}
          InputProps={{
            sx: {
              borderRadius: '0px',
              height: '50px',
            },
          }}
        />
        <TextField
          label="رمز عبور"
          inputProps={{ ...register('password') }}
          error={!!errors.password}
          helperText={errors.password?.message}
          fullWidth
          sx={{
            maxWidth: '400px',
          }}
          InputProps={{
            sx: {
              borderRadius: '0px',
              height: '50px',
            },
          }}
        />
        <Button
          variant="contained"
          sx={{ maxWidth: '400px', borderRadius: '0', marginTop: '30px' }}
          fullWidth
          type="submit"
          color="success"
        >
          ورود
        </Button>

        {isLoading && <CircularProgress />}
      </Box>
    </Box>
  );
}

export default AddProductForm;
