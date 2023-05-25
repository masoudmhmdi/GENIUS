import AuthLayout from '@/Layouts/AuthLayout/AuthLayout';
import React, { ReactNode } from 'react';

function Login() {
  return <div>Login</div>;
}

export default Login;

Login.getLayout = function pageLayout(page: ReactNode) {
  return <AuthLayout>{page}</AuthLayout>;
};
