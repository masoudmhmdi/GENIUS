import MyModal from '@/Components/Modal';
import { RootState } from '@/types';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import React from 'react';
import CartCard from '@/Components/cartcard';

function CartPage() {
  const { cartSlice } = useSelector(
    (state: RootState) => state.persistedReducer
  );
  return (
    <Box sx={{ display: 'flex', marginTop: '60px', minHeight: '100vh' }}>
      <Box sx={{ width: '30%' }}>sss</Box>
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
