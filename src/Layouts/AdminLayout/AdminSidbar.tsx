import SidebarBottomNavigation from '@/Components/SidbarButtonNavigation';
import { Box, Typography } from '@mui/material';
import React from 'react';

function AdminSidebar() {
  return (
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
  );
}

export default AdminSidebar;
