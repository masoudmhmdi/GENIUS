import React, { ReactNode } from 'react';
import MainHeader from './MainHeader';

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
}

export default MainLayout;
