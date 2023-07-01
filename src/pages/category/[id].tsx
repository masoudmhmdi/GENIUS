import ProductCard from '@/Components/card';
import useGetProductByCategory from '@/api/services/getProductByCategory';
import getProductByCategoryService from '@/api/services/getProductByCategory/getProductByCategoryService';
import { theme } from '@/theme';
import { IProductFromBack } from '@/types';
import { Box, Button, Typography } from '@mui/material';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import FilterBar from '@/Components/FilterBar';
import { serverReq } from '@/api/constants';
import { useGetCategoryById } from '@/api/services/useGetCategoryById';

function SingleCategoryPage({ id }: { id: string }) {
  const { data: category } = useGetCategoryById(id);
  console.log(category);

  const { data: productData, isLoading } = useGetProductByCategory(id, '8');

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Typography sx={{ marginBottom: '50px' }}>
        جینیس شاپ/{category?.data.category.name}
      </Typography>
      <Box sx={{ display: 'flex', gap: '50px', height: '100%' }}>
        <Box
          sx={{
            width: '30%',
            position: 'sticky',
            top: '10px',
            height: '150px',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: theme.palette.secondary.main,
            borderRadius: '6px',
          }}
        >
          <FilterBar />
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
          {productData?.data.products.map((product: IProductFromBack) => {
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
    getProductByCategoryService(id, '8')
  );
  await queryClient.prefetchQuery(['categoryInfo', id], () =>
    getCategoryByIdService(id)
  );

  return {
    props: {
      data: dehydrate(queryClient),
      id,
    },
  };
};
