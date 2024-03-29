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
import { deleteProduct, minusCount, plusCount } from '@/Store/slice/cart.slice';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import DeleteProductFromCartModal from '../deleteProductFromCartModal';
import { handleDeleteModal, setId } from '@/Store/slice/modalAndToast.slice';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
function SmallCartCard({ cartProductDate }: { cartProductDate: Cart }) {
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
          paddingX: '8px',
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
          <Typography align="center" fontSize={14}>
            {cartProductDate.product.name}
          </Typography>
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
              width: '70px',
              borderRadius: '16px',
              height: '35px',
              overflow: 'hidden',
              border: '1px solid #8080803d ',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Button
              sx={{ height: '100%', minWidth: '30px', maxWidth: '30px' }}
              onClick={() => dispatch(plusCount(cartProductDate.product._id))}
            >
              <AddRoundedIcon />
            </Button>
            <Typography fontWeight={'500'} sx={{ marginY: 'auto' }}>
              {cartProductDate.count}
            </Typography>
            {cartProductDate.count === 1 ? (
              <Button
                sx={{ height: '100%', minWidth: '30px', maxWidth: '30px' }}
                onClick={() => {
                  dispatch(handleDeleteModal(true));
                  dispatch(setId(cartProductDate.product._id));
                }}
              >
                <DeleteOutlinedIcon sx={{ fontSize: '22px' }} color="error" />
              </Button>
            ) : (
              <Button
                sx={{ height: '100%', minWidth: '30px', maxWidth: '30px' }}
                onClick={() =>
                  dispatch(minusCount(cartProductDate.product._id))
                }
              >
                <RemoveRoundedIcon />
              </Button>
            )}
          </Box>
          <Typography>
            تومان{cartProductDate.product.price * cartProductDate.count}
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
          image={cartProductDate.product.images[0]}
        />
      </CardActionArea>
    </Card>
  );
}

export default SmallCartCard;
