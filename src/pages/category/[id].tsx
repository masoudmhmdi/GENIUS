import ProductCard from '@/Components/card';
import RowRadioButtonsGroup from '@/Components/FilterBar';
import useGetProductByCategory from '@/api/services/getProductByCategory';
import getProductByCategoryService from '@/api/services/getProductByCategory/getProductByCategoryService';
import { theme } from '@/theme';
import { Category, IProductFromBack, RootState } from '@/types';
import { Box, Button, Typography } from '@mui/material';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React, { useState } from 'react';
import FilterBar from '@/Components/FilterBar';
import { serverReq } from '@/api/constants';
import { useSelector } from 'react-redux';

function SingleCategoryPage({ data }: any) {
  let products: IProductFromBack[] = data.queries[0].state.data.data.products;
  let category: Category = data.queries[1].state.data.data.category;

  const {
    data: productData,
    refetch,
    isLoading,
  } = useGetProductByCategory(category._id, 8);

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Typography sx={{ marginBottom: '50px' }}>
        جینیس شاپ/{category.name}
      </Typography>
      <Box sx={{ display: 'flex', gap: '50px', height: '100%' }}>
        <Box
          sx={{
            width: '30%',
            // position: 'fixed',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: theme.palette.secondary.main,
            borderRadius: '6px',
          }}
        >
          <FilterBar />
          <Button onClick={() => refetch()}>اعمال</Button>
        </Box>
        <Box
          sx={{
            width: '70%',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '30px',
            justifyContent: 'space-between',
            marginLeft: 'auto',
          }}
        >
          {products.map((product) => {
            return <ProductCard key={product._id} productData={product} />;
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default SingleCategoryPage;

interface IProductParams extends ParsedUrlQuery {
  id: string;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { id } = params as IProductParams;

  const queryClient = new QueryClient();

  const getCategoryByIdService = async (id: string) => {
    const res = await serverReq(`/categories/${id}`);
    return res.data;
  };

  await queryClient.prefetchQuery(['getProductByCategory', id], () =>
    getProductByCategoryService(id, 8)
  );
  await queryClient.prefetchQuery(['categoryInfo', id], () =>
    getCategoryByIdService(id)
  );

  return {
    props: {
      data: dehydrate(queryClient),
    },
  };
};
