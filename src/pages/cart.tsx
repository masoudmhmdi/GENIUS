import MyModal from '@/Components/Modal';
import { RootState } from '@/types';
import { useSelector } from 'react-redux';
import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import CartCard from '@/Components/cartcard';
import Image from 'next/image';

function CartPage() {
  const { cartSlice } = useSelector(
    (state: RootState) => state.persistedReducer
  );
  return (
    <Box
      sx={{
        display: 'flex',
        marginTop: '60px',
        minHeight: '100vh',
        gap: '50px',
      }}
    >
      <Box
        sx={{
          width: '30%',
          borderRadius: '20px',
          boxShadow: '0px 1px 1px 1px #e0e0e0',

          height: '300px',
          padding: '8px',
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
          <Typography sx={{ marginY: '12px' }}>کد تخفیف:</Typography>
          <Box sx={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
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
              inputProps={{ style: { maxHeight: '5px', minHeight: '5px' } }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: '6px',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginY: '12px',
          }}
        >
          <Typography sx={{ marginY: '12px' }}>مجموع قیمت</Typography>
          <Typography sx={{ marginY: '12px' }}>0تومان</Typography>
        </Box>
        <Button fullWidth variant="contained" sx={{ marginTop: '20px' }}>
          تکمیل خرید
        </Button>
      </Box>
      <Box
        sx={{
          width: '70%',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        {cartSlice.map((product) => {
          return (
            <CartCard cartProductDate={product} key={product.product._id} />
          );
        })}
      </Box>
    </Box>
  );
}

export default CartPage;
