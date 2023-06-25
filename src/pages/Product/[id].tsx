import React, { useState } from 'react';
import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import getProductByIdService from '@/api/services/useGetProductById/getProductByIdService';
import { IProductFromBack, RootState } from '@/types';
import { AxiosResponse } from 'axios';
import { Box, Button, Link, Rating, Typography } from '@mui/material';
import SingleProductSlider from '@/Components/singleProductSlider';
import parse from 'html-react-parser';
import Image from 'next/image';
import OriginalIcon from '@/Components/icons/orginal';
import ExpressDelivery from '@/Components/icons/expressDelivery';
import CashNoDelivery from '@/Components/icons/cashNoDelivery';
import SevenDay from '@/Components/icons/sevenDay';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import { Remove } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/Store/slice/cart.slice';
import { theme } from '@/theme';

function SingleProductPage({
  data,
}: {
  data: AxiosResponse<{ product: IProductFromBack }>;
}) {
  const productData = data.data.product;
  const cartState = useSelector((state: RootState) => state.persistedReducer);
  console.log(cartState);
  const dispatch = useDispatch();
  const [productState, setProductState] = useState({
    product: productData._id,
    count: 1,
  });

  const addCount = () => {
    setProductState((prev) => {
      return {
        ...prev,
        count: prev.count < productData.quantity ? prev.count + 1 : prev.count,
      };
    });
  };
  const minusCount = () => {
    setProductState((prev) => {
      return {
        ...prev,
        count: prev.count > 1 ? prev.count + -1 : prev.count,
      };
    });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        marginY: '60px',
        justifyContent: 'space-between',
        gap: '100px',
      }}
    >
      <Box sx={{ width: '50%' }}>
        <SingleProductSlider images={productData.images} />
      </Box>
      <Box
        sx={{
          width: '50%',
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
              {productState.count}
            </Typography>
            <Button
              sx={{ height: '100%', minWidth: '50px', maxWidth: '50px' }}
              onClick={minusCount}
            >
              <RemoveRoundedIcon />
            </Button>
          </Box>
        </Box>
        <Link
          href="/cart"
          style={{
            textDecoration: 'none',
            color: theme.palette.primary.main,
          }}
        >
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
        </Link>
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
