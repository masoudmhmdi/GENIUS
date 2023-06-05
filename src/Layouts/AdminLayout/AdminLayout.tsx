import React, { ReactNode } from 'react';

import { Box, Container, Grid, Typography } from '@mui/material';
import Footer from '../Footer';
import AdminHeader from './AdminHeader';
import SidebarBottomNavigation from '@/Components/SidbarButtonNavigation';

function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <AdminHeader />

      <Box sx={{ display: 'flex', gap: '10px' }}>
        <Box
          sx={{
            width: '25%',
            height: '100vh',
            marginTop: '70px',
            borderRight: '1px solid #d0d0d0',
          }}
        >
          <Typography variant="h5" textAlign={'center'}>
            پنل مدیریت فروشگاه
          </Typography>
          <SidebarBottomNavigation />
        </Box>
        <Box
          sx={{
            marginTop: '70px',
            width: '75%',
            height: '100%',
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
}

export default AdminLayout;
