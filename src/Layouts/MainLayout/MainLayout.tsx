import React, { ReactNode } from 'react';
import MainHeader from './MainHeader';
import { Box, Container, Grid } from '@mui/material';
import Footer from '../Footer';

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <MainHeader />
      <Container>
        <Box sx={{ paddingTop: '70px' }}> {children}</Box>
      </Container>
      <Footer />
    </>
  );
}

export default MainLayout;
