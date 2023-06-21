import React from 'react';
import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import getProductByIdService from '@/api/services/useGetProductById/getProductByIdService';

function SingleProductPage() {
  return <div>SingleProductPage</div>;
}

export default SingleProductPage;

interface IProductParams extends ParsedUrlQuery {
  id: string;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const client = new QueryClient();
  const { id } = params as IProductParams;
  client.prefetchQuery(['getProductById', id], () => getProductByIdService(id));

  return {
    props: {
      productData: dehydrate(client),
    },
  };
};
