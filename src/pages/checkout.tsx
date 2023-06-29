import React, { ReactNode, useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import { idID } from '@mui/material/locale';
import { count } from 'console';
import Link from 'next/link';
import { theme } from '@/theme';
import useCreateNewOrder from '@/api/services/useAddNewOrder';
import { IOrder, RootState } from '@/types';
import { useSelector } from 'react-redux';

function Checkout() {
  const router = useRouter();
  const deliveryStatus = router.query.delivery;
  const [counter, setCounter] = useState(10);
  const { mutate } = useCreateNewOrder();

  useEffect(() => {
    const id = setInterval(() => {
      if (counter > 0) setCounter((prev) => prev - 1);
      if (counter === 0) {
        // router.push('/');
      }
    }, 1000);
    return () => clearInterval(id);
  }, [counter]);

  useEffect(() => {
    const d = router.query.delivery;
    console.log(d);
    if (d === 'true') {
      mutate();
    }
  }, [router]);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          boxShadow: 1,
          padding: 4,
          paddingTop: 1,
          minWidth: '500px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            marginY: '10px',
          }}
        >
          <Image
            src={deliveryStatus === 'true' ? '/success.png' : '/error.png'}
            width={50}
            height={50}
            alt="success"
          />
        </Box>
        <Typography align="center" variant="h5">
          {deliveryStatus === 'true'
            ? 'سفارش شما با موفقیت انجام شد'
            : 'سفارش انجام نشد'}
        </Typography>

        <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <Box
            sx={{
              minWidth: '45px',
              maxWidth: '45px',
              maxHeight: '45px',
              minHeight: '45px',
              fontSize: '24px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: 2,
              borderRadius: '100%',
            }}
          >
            {counter}
          </Box>
          <Link
            href={'/'}
            style={{
              textDecoration: 'none',
              color: theme.palette.primary.main,
            }}
          >
            <Button sx={{ height: '40px' }} fullWidth variant="contained">
              بازگشت به صفحه اصلی
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Checkout;

Checkout.getLayout = function pageLayout(page: ReactNode) {
  return page;
};
