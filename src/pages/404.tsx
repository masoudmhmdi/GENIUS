import AuthLayout from '@/Layouts/AuthLayout/AuthLayout';
import React, { ReactNode } from 'react';

function NotFound() {
  return <div>NotFound</div>;
}

export default NotFound;

NotFound.getLayout = function pageLayout(page: ReactNode) {
  return <AuthLayout>{page}</AuthLayout>;
};
