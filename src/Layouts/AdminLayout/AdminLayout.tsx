import React, { ReactNode } from 'react';

import { Box, Container, Grid, Typography } from '@mui/material';
import Footer from '../Footer';
import AdminHeader from './AdminHeader';
import SidebarBottomNavigation from '@/Components/SidbarButtonNavigation';
import AdminSidebar from './AdminSidbar';

function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <AdminHeader />
      <Box sx={{ display: 'flex' }}>
        <AdminSidebar />
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
