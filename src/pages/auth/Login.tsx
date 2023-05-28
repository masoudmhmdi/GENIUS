import AuthLayout from '@/Layouts/AuthLayout/AuthLayout';
import { Box, Button, Link, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import React, { ReactNode } from 'react';

function Login() {
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
      >
        <TextField
          error
          // helperText={}
          label="hello"
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
          label="hello"
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
