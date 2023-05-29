import AuthLayout from '@/Layouts/AuthLayout/AuthLayout';
import { Box, Button, Link, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import React, { ReactNode } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { ILoginData } from '@/types';
import { error } from 'console';

const schema = yup.object({
  username: yup.string().required('این فیلد ضروری است'),
  password: yup.string().required('این فیلد ضروری است'),
});

function Login() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ILoginData['payload']>({
    resolver: yupResolver(schema),
  });

  const submitHandler = (d: ILoginData['payload']) => {
    console.log(d);
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
        sx={{
          marginTop: '50px',
          textAlign: 'center',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '15px',
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
        >
          jj
        </Button>

        <Link
          href="/auth/register"
          sx={{ opacity: '1', cursor: 'pointer', margin: '0 3px' }}
        >
          ثبت نام کنید
        </Link>
      </Box>
    </Box>
  );
}

export default Login;

Login.getLayout = function pageLayout(page: ReactNode) {
  return <AuthLayout>{page}</AuthLayout>;
};
