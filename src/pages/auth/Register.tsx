import AuthLayout from '@/Layouts/AuthLayout/AuthLayout';
import React, { ReactNode } from 'react';

function Register() {
  return <div>Register</div>;
}

export default Register;

Register.getLayout = function pageLayout(page: ReactNode) {
  return <AuthLayout>{page}</AuthLayout>;
};
