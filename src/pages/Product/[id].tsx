import React from 'react';
import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

function SingleProductPage() {
  return <div>SingleProductPage</div>;
}

export default SingleProductPage;

interface IProductParams extends ParsedUrlQuery {
  id: string;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as IProductParams;
  console.log(id);
  return {
    props: {},
  };
};
