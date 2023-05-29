import AuthLayout from '@/Layouts/AuthLayout/AuthLayout';
import { IRegisterData } from '@/types';
import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import React, { ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useRegisterUser from '@/api/services/UseRegisterUser';
import cookie from 'js-cookie';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

const schema = yup.object({
  firstname: yup.string().required('این فیلد ضروری است'),
  lastname: yup.string().required('این فیلد ضروری است'),
  username: yup.string().required('این فیلد ضروری است'),
  password: yup.string().required('این فیلد ضروری است'),
  phoneNumber: yup.string().required('این فیلد ضروری است'),
  address: yup.string().required('این فیلد ضروری است'),
});

function Register() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IRegisterData['payload']>({
    resolver: yupResolver(schema),
  });
  const router = useRouter();
  const { mutate } = useRegisterUser({
    onSuccess: (res) => {
      cookie.set('accessToken', res.token.accessToken);
      cookie.set('refreshToken', res.token.refreshToken);
      router.push('/');
    },
    onError: (err) => {
      switch (err.response?.status) {
        case 400: {
          const massage = err.response.data.message;
          const field = massage.split(`"`)[1];
          setError(field as keyof IRegisterData['payload'], {
            message: massage,
          });
        }
        default: {
          console.log('default');
          toast(err.response?.data.message as string);
        }
      }
    },
  });

  const submitHandler = (d: IRegisterData['payload']) => {
    console.log(d);
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
      <Box sx={{ marginTop: '50px', textAlign: 'center' }}>
        <Image
          alt="lsdj"
          width={522}
          height={140}
          style={{ width: '100%', maxWidth: '522px' }}
          src={'/logo.png'}
        />
      </Box>
      <Box
        component={'form'}
        onSubmit={handleSubmit(submitHandler)}
        sx={{
          marginTop: '50px',
          textAlign: 'center',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '15px',
          marginBottom: '200px',
        }}
      >
        <TextField
          label="نام"
          error={Boolean(errors.firstname)}
          helperText={errors.firstname?.message}
          fullWidth
          sx={{
            maxWidth: '400px',
          }}
          InputProps={{
            sx: {
              borderRadius: '0px',
              height: '50px',
            },
            ...register('firstname'),
          }}
        />
        <TextField
          label="lastname"
          error={Boolean(errors.lastname)}
          helperText={errors.lastname?.message}
          fullWidth
          sx={{
            maxWidth: '400px',
          }}
          InputProps={{
            sx: {
              borderRadius: '0px',
              height: '50px',
            },
            ...register('lastname'),
          }}
        />
        <TextField
          label="username"
          error={Boolean(errors.username)}
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
            ...register('username'),
          }}
        />
        <TextField
          label="hello"
          fullWidth
          error={Boolean(errors.password)}
          helperText={errors.password?.message}
          sx={{
            maxWidth: '400px',
          }}
          InputProps={{
            sx: {
              borderRadius: '0px',
              height: '50px',
            },
            ...register('password'),
          }}
        />
        <TextField
          label="hello"
          fullWidth
          error={Boolean(errors.phoneNumber)}
          helperText={errors.phoneNumber?.message}
          sx={{
            maxWidth: '400px',
          }}
          InputProps={{
            sx: {
              borderRadius: '0px',
              height: '50px',
            },
            ...register('phoneNumber'),
          }}
        />
        <TextField
          label="hello"
          error={Boolean(errors.address)}
          helperText={errors.address?.message}
          fullWidth
          sx={{
            maxWidth: '400px',
          }}
          InputProps={{
            sx: {
              borderRadius: '0px',
              height: '50px',
            },
            ...register('address'),
          }}
        />
        <Button
          variant="contained"
          sx={{ maxWidth: '400px', borderRadius: '0', marginTop: '30px' }}
          fullWidth
          type="submit"
        >
          ثبت تام
        </Button>

        <Link
          href="/auth/register"
          sx={{ opacity: '1', cursor: 'pointer', margin: '0 3px' }}
        >
          ورود
        </Link>
      </Box>
    </Box>
  );
}

export default Register;

Register.getLayout = function pageLayout(page: ReactNode) {
  return <AuthLayout>{page}</AuthLayout>;
};
