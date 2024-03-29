import React, { useState } from 'react';
import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { QueryClient } from '@tanstack/react-query';
import getProductByIdService from '@/api/services/useGetProductById/getProductByIdService';
import { IProductFromBack, RootState } from '@/types';
import { AxiosResponse } from 'axios';
import { Box, Button, Rating, Typography } from '@mui/material';
import SingleProductSlider from '@/Components/singleProductSlider';
import parse from 'html-react-parser';
import OriginalIcon from '@/Components/icons/orginal';
import ExpressDelivery from '@/Components/icons/expressDelivery';
import CashNoDelivery from '@/Components/icons/cashNoDelivery';
import SevenDay from '@/Components/icons/sevenDay';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  deleteProduct,
  minusCount,
  plusCount,
} from '@/Store/slice/cart.slice';

function SingleProductPage({
  data,
}: {
  data: AxiosResponse<{ product: IProductFromBack }>;
}) {
  const productData = data.data.product;
  const { cartSlice } = useSelector(
    (state: RootState) => state.persistedReducer
  );
  const dispatch = useDispatch();
  const [productState, setProductState] = useState({
    product: productData,
    count: 1,
  });
  const isExistInCart = cartSlice.allCart.find(
    (product) => product.product._id === productData._id
  );

  const addCount = () => {
    setProductState((prev) => {
      return {
        ...prev,
        count: prev.count < productData.quantity ? prev.count + 1 : prev.count,
      };
    });
    dispatch(plusCount(productData._id));
  };
  const minusLocalStateCount = () => {
    setProductState((prev) => {
      return {
        ...prev,
        count: prev.count > 1 ? prev.count + -1 : prev.count,
      };
    });
    dispatch(minusCount(productData._id));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
        marginY: '60px',
        justifyContent: 'space-between',
        gap: '100px',
      }}
    >
      <Box
        sx={{
          width: {
            xs: '100%',
            md: '50%',
          },
        }}
      >
        <SingleProductSlider images={productData.images} />
      </Box>
      <Box
        sx={{
          width: {
            xs: '100%',
            md: '50%',
          },
          display: 'flex',
          gap: '20px',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h6" sx={{ borderBottom: '1px solid gray' }}>
          {productData.category.name}/{productData.subcategory.name}
        </Typography>
        <Typography variant="h4">{productData.name}</Typography>
        <Rating name="simple-controlled" value={4} readOnly />
        <Box>{parse(productData.description)}</Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 'auto',
          }}
        >
          <Typography variant="h5" fontWeight={'bold'}>
            {productData.price}$
          </Typography>
          {isExistInCart && (
            <Box
              sx={{
                width: '120px',
                borderRadius: '16px',
                height: '40px',
                overflow: 'hidden',
                border: '1px solid #8080803d ',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Button
                sx={{ height: '100%', minWidth: '50px', maxWidth: '50px' }}
                onClick={addCount}
              >
                <AddRoundedIcon />
              </Button>
              <Typography fontWeight={'500'} sx={{ marginY: 'auto' }}>
                {isExistInCart ? isExistInCart.count : productState.count}
              </Typography>
              <Button
                sx={{ height: '100%', minWidth: '50px', maxWidth: '50px' }}
                onClick={minusLocalStateCount}
              >
                <RemoveRoundedIcon />
              </Button>
            </Box>
          )}
        </Box>
        {isExistInCart ? (
          <Button
            color="error"
            variant="contained"
            sx={{ marginTop: 'auto', borderRadius: '6px' }}
            onClick={() => dispatch(deleteProduct(productData._id))}
            fullWidth
            size="large"
          >
            حذف از سبد خرید
          </Button>
        ) : (
          <Button
            size="large"
            sx={{ marginTop: 'auto', borderRadius: '6px' }}
            fullWidth
            variant="contained"
            onClick={() => dispatch(addToCart(productState))}
          >
            <ShoppingCartRoundedIcon sx={{ marginX: '10px' }} />
            افزون به سبد خرید
          </Button>
        )}

        <Box
          sx={{
            marginTop: 'auto',
            display: 'flex',
            justifyContent: 'space-between',
            borderTop: '1px solid #8080803d',
            paddingY: '6px',
            alignItems: 'end',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <OriginalIcon />
            <Typography
              sx={{ fontSize: '14px', opacity: '0.7' }}
              align="center"
            >
              ضمانت اصالت کالا
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <ExpressDelivery />
            <Typography
              sx={{ fontSize: '14px', opacity: '0.7' }}
              align="center"
            >
              امکان تحویل اکسپرس
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <CashNoDelivery />
            <Typography
              sx={{ fontSize: '14px', opacity: '0.7' }}
              align="center"
            >
              امکان پرداخت درب منزل
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <SevenDay />
            <Typography
              sx={{ fontSize: '14px', opacity: '0.7' }}
              align="center"
            >
              هفت روز ضمانت بازگشت کالا
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SingleProductPage;

interface IProductParams extends ParsedUrlQuery {
  id: string;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const client = new QueryClient();
  const { id } = params as IProductParams;
  //   client.prefetchQuery(['getProductById', id], () => );
  const { data } = await getProductByIdService(id);

  return {
    props: {
      data,
    },
  };
};
