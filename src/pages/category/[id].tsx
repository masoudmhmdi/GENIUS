import useGetProductByCategory from '@/api/services/getProductByCategory';
import getProductByCategoryService from '@/api/services/getProductByCategory/getProductByCategoryService';
import { theme } from '@/theme';
import { IProductFromBack } from '@/types';
import { Box, Button, Typography } from '@mui/material';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React, { useCallback, useEffect, useRef } from 'react';
import FilterBar from '@/Components/FilterBar';
import { serverReq } from '@/api/constants';
import { useGetCategoryById } from '@/api/services/useGetCategoryById';
import FilteringDownDrawer from '@/Components/filteringDownDrawer';
import getCategoryByIdService from '@/api/services/useGetCategoryById/getCategoryByIdService';
import { useDispatch } from 'react-redux';
import { handleSortingProducts } from '@/Store/slice/products.slice';
import { brandSetter, priceSetter } from '@/Store/slice/singleCategory.slice';
import { ProductCard } from '@/Components/card';

function SingleCategoryPage({ id, query }: { id: string; query: any }) {
  const { data: category } = useGetCategoryById(id);

  const dispatch = useDispatch();

  const {
    data: productData,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    status,
    error,
  } = useGetProductByCategory(id, '4');

  useEffect(() => {
    dispatch(priceSetter(query.sort));
    dispatch(brandSetter(query.brand));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const intObserver = useRef<any>();
  const lastPostRef = useCallback(
    (product: IProductFromBack) => {
      if (isFetchingNextPage) return;
      if (intObserver.current) intObserver.current.disconnect();

      intObserver.current = new IntersectionObserver((product) => {
        console.log(hasNextPage);
        if (product[0].isIntersecting && hasNextPage) {
          console.log('last post');
          fetchNextPage();
        }
      });

      if (product) intObserver.current.observe(product);
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage]
  );

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Button onClick={() => console.log(intObserver)}>click</Button>
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
            display: {
              xs: 'none',
              md: 'block',
            },
          }}
        >
          <FilterBar />
        </Box>
        <Box
          sx={{
            width: {
              xs: '100%',
              md: '70%',
            },
          }}
        >
          <FilteringDownDrawer />
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '30px',
              justifyContent: 'space-around',
              marginLeft: 'auto',
            }}
          >
            {productData?.pages.map((pg) => {
              return pg.data.products.map(
                (product: IProductFromBack, i: number) => {
                  if (pg.data.products.length === i + 1) {
                    return (
                      <ProductCard
                        ref={lastPostRef}
                        key={product._id}
                        productData={product}
                      />
                    );
                  } else {
                    return (
                      <ProductCard key={product._id} productData={product} />
                    );
                  }
                }
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SingleCategoryPage;

interface IProductParams extends ParsedUrlQuery {
  id: string;
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
  query,
}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { id } = params as IProductParams;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['getProductByCategory', id], () =>
    getProductByCategoryService(id, '8', query as any)
  );
  await queryClient.prefetchQuery(['categoryInfo', id], () =>
    getCategoryByIdService(id)
  );

  return {
    props: {
      data: dehydrate(queryClient),
      id,
      query,
    },
  };
};
