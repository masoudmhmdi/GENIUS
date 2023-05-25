import React, { ReactNode } from 'react';
import AuthHeader from './AuthHeader';

function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <AuthHeader />
      {children}
    </>
  );
}

export default AuthLayout;
