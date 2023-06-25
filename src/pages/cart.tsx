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
    <Box>
      {cartSlice.map((product) => {
        return <CartCard cartProductDate={product} key={product.product._id} />;
      })}
    </Box>
  );
}

export default CartPage;
