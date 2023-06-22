import React from 'react';
import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import getProductByIdService from '@/api/services/useGetProductById/getProductByIdService';
import { IProductFromBack } from '@/types';
import { AxiosResponse } from 'axios';
import { Box, Rating, Typography } from '@mui/material';
import SingleProductSlider from '@/Components/singleProductSlider';

function SingleProductPage({
  data,
}: {
  data: AxiosResponse<{ product: IProductFromBack }>;
}) {
  const productData = data.data.product;
  return (
    <Box sx={{ display: 'flex', marginY: '60px' }}>
      <Box sx={{ width: '50%' }}>
        <SingleProductSlider images={productData.images} />
      </Box>
      <Box sx={{ width: '50%' }}>
        <Typography variant="h4">{productData.name}</Typography>
        <Rating name="simple-controlled" value={4} readOnly />
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
