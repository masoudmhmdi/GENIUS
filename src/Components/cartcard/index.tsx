import { Cart } from '@/types';
import { Box } from '@mui/material';
import React from 'react';
import Image from 'next/image';
function CartCard({ cartProductDate }: { cartProductDate: Cart }) {
  return (
    <Box sx={{ display: 'flex', height: '150px' }}>
      <Box sx={{ width: '85%', height: '100%' }}>ss</Box>
      <Box sx={{ width: '15%', height: '100%', position: 'relative' }}>
        <Image
          src={cartProductDate.product.images[0]}
          alt="cart-product-img"
          fill
        />
      </Box>
    </Box>
  );
}

export default CartCard;
