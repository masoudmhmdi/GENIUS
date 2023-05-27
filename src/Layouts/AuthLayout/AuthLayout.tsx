import React, { ReactNode } from 'react';
import { Box, Container, Grid } from '@mui/material';
import Footer from '../Footer';
import AuthHeader from './AuthHeader';

function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <AuthHeader />
      <Container>
        <Grid>
          <Box sx={{ paddingTop: '70px' }}> {children}</Box>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default AuthLayout;
