import MyModal from '@/Components/Modal';
import { RootState } from '@/types';
import { useSelector } from 'react-redux';
import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import CartCard from '@/Components/cartcard';
import Image from 'next/image';
import SubmitOrderModal from '@/Components/SubmitOrderModal';

function CartPage() {
  const { cartSlice } = useSelector(
    (state: RootState) => state.persistedReducer
  );
  console.log(cartSlice);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column-reverse',
          md: 'row',
        },
        marginTop: '60px',
        minHeight: '100vh',
        gap: '50px',
      }}
    >
      <Box
        sx={{
          width: {
            xs: '100%',
            md: '30%',
          },
          borderRadius: '20px',
          boxShadow: '0px 1px 1px 1px #e0e0e0',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '300px',
          padding: '16px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            borderBottom: '1px solid gray',
          }}
        >
          <Image alt="logo" src={'/Logo.webp'} width={200} height={50} />
        </Box>
        <Box>
          <Typography>کد تخفیف:</Typography>
          <Box
            sx={{
              display: 'flex',
              gap: '6px',
              alignItems: 'center',
              marginTop: '8px',
              marginX: 'auto',
            }}
          >
            <Button
              variant="contained"
              sx={{
                borderRadius: '100%',
                minHeight: '40px',
                maxHeight: '40px',
                minWidth: '40px',
                maxWidth: '40px',
              }}
            >
              +
            </Button>
            <TextField
              fullWidth
              inputProps={{
                style: { maxHeight: '5px', minHeight: '5px' },
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: '6px',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography sx={{ marginY: '12px' }}>مجموع قیمت</Typography>
          <Typography sx={{ marginY: '12px' }}>
            {cartSlice.totalPrice}تومان
          </Typography>
        </Box>
        <SubmitOrderModal />
      </Box>
      <Box
        sx={{
          width: {
            xs: '100%',
            md: '70%',
          },
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        {cartSlice.allCart?.map((product) => {
          return (
            <CartCard cartProductData={product} key={product.product._id} />
          );
        })}
      </Box>
    </Box>
  );
}

export default CartPage;
