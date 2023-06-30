import { Cart } from '@/types';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import { useDispatch } from 'react-redux';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { deleteProduct, minusCount, plusCount } from '@/Store/slice/cart.slice';
import DeleteProductFromCartModal from '../deleteProductFromCartModal';
import { handleDeleteModal } from '@/Store/slice/modalAndToast.slice';
function CartCard({ cartProductData }: { cartProductData: Cart }) {
  const dispatch = useDispatch();
  return (
    <Card
      sx={{
        display: 'flex',
        height: '130px',
        padding: '12px',
        borderRadius: '16px',
      }}
    >
      <Box
        sx={{
          width: '85%',
          height: '100%',
          paddingX: '30px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '30px',
          }}
        >
          <Button onClick={() => dispatch(handleDeleteModal(true))}>
            <DeleteRoundedIcon color="error" />
          </Button>
          <Typography>{cartProductData.product.name}</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: '100px',
              borderRadius: '16px',
              height: '35px',
              overflow: 'hidden',
              border: '1px solid #8080803d ',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Button
              sx={{ height: '100%', minWidth: '40px', maxWidth: '40px' }}
              onClick={() => dispatch(plusCount(cartProductData.product._id))}
            >
              <AddRoundedIcon />
            </Button>
            <Typography fontWeight={'500'} sx={{ marginY: 'auto' }}>
              {cartProductData.count}
            </Typography>
            <Button
              sx={{ height: '100%', minWidth: '40px', maxWidth: '40px' }}
              onClick={() => dispatch(minusCount(cartProductData.product._id))}
            >
              <RemoveRoundedIcon />
            </Button>
          </Box>
          <Typography>
            تومان{cartProductData.product.price * cartProductData.count}
          </Typography>
        </Box>
      </Box>
      <CardActionArea sx={{ width: '15%' }}>
        <CardMedia
          sx={{
            width: '100%',
            height: '100%',
            position: 'relative',
            padding: '6px',
            objectFit: 'contain',
          }}
          component="img"
          image={cartProductData.product.images[0]}
        />
      </CardActionArea>
      <DeleteProductFromCartModal id={cartProductData?.product._id} />
    </Card>
  );
}

export default CartCard;
