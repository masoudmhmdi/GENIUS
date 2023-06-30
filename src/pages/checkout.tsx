/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { theme } from '@/theme';
import { GetServerSideProps } from 'next/types';
import useCreateNewOrder from '@/api/services/useAddNewOrder';
import { useDispatch } from 'react-redux';

function Checkout({ deliveryStatus }: any) {
  const [counter, setCounter] = useState(10);
  const { mutate } = useCreateNewOrder();
  const router = useRouter();
  let tempCounter = 10;

  useEffect(() => {
    const id = setInterval(() => {
      console.log(tempCounter);
      if (tempCounter > 0) {
        setCounter((prev) => prev - 1);
        tempCounter -= 1;
      }
      if (tempCounter === 0) {
        router.push('/');
      }
    }, 1000);
    console.log(id);

    return () => clearInterval(id);
  }, []);

  // use effect for set request
  useEffect(() => {
    console.log(deliveryStatus);
    if (deliveryStatus === 'true') {
      mutate();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
              width: '100%',
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

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { deliveryStatus } = query;
  console.log(query);
  return {
    props: {
      deliveryStatus: query.delivery,
    },
  };
};

Checkout.getLayout = function pageLayout(page: ReactNode) {
  return page;
};
