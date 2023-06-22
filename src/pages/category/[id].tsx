import ProductCard from '@/Components/card';
import RowRadioButtonsGroup from '@/Components/FilterBar';
import useGetProductByCategory from '@/api/services/getProductByCategory';
import getProductByCategoryService from '@/api/services/getProductByCategory/getProductByCategoryService';
import { theme } from '@/theme';
import { IProductFromBack } from '@/types';
import { Box, Typography } from '@mui/material';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React, { useState } from 'react';
import FilterBar from '@/Components/FilterBar';

function SingleCategoryPage({ data }: any) {
  let products: IProductFromBack[] = data.queries[0].state.data.data.products;
  const [filterParams, setFilterParams] = useState<
    {} | { sort: string; brand: string }
  >({});
  console.log(filterParams);
  return (
    <Box>
      <Typography sx={{ marginBottom: '50px' }}>
        جینیس شاپ/{products[0].category.name}
      </Typography>
      <Box sx={{ display: 'flex', gap: '50px' }}>
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
          <FilterBar setter={setFilterParams} />
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

  await queryClient.prefetchQuery(['category', id], () =>
    getProductByCategoryService(id, 8)
  );

  return {
    props: {
      data: dehydrate(queryClient),
    },
  };
};
