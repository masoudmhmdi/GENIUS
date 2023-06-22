import ProductCard from '@/Components/card';
import RowRadioButtonsGroup from '@/Components/radioGroup';
import useGetProductByCategory from '@/api/services/getProductByCategory';
import getProductByCategoryService from '@/api/services/getProductByCategory/getProductByCategoryService';
import { IProductFromBack } from '@/types';
import { Box } from '@mui/material';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';

function SingleCategoryPage({ data }: any) {
  const products: IProductFromBack[] = data.queries[0].state.data.data.products;
  console.log(products);
  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ width: '30%' }}>
        <RowRadioButtonsGroup />
      </Box>
      <Box
        sx={{
          width: '70%',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '30px',
          justifyContent: 'space-between',
        }}
      >
        {products.map((product) => {
          return <ProductCard key={product._id} productData={product} />;
        })}
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

  await queryClient.prefetchQuery(['category', id], () =>
    getProductByCategoryService(id, 8)
  );

  return {
    props: {
      data: dehydrate(queryClient),
    },
  };
};
