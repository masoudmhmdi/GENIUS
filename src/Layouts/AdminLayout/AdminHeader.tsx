import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import BasicTabs from '@/Components/Tabs';
import React from 'react';
import Image from 'next/image';
import { Box, Button, Typography } from '@mui/material';

import Sidebar from '@/Components/sidebar';
import SidebarBottomNavigation from '@/Components/SidbarButtonNavigation';
import CartPopover from '@/Components/CartPopover';
import AdminSidebar from '@/Components/adminSidebar';

export default function AdminHeader() {
  return (
    <React.Fragment>
      <AppBar sx={{ backgroundColor: 'white' }}>
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingX: '0',
          }}
        >
          <Box
            sx={{
              backgroundColor: 'white',
              width: '100%',
            }}
          >
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'cetner',
                }}
              >
                <Box
                  sx={{
                    display: {
                      xs: 'none',
                      md: 'block',
                    },
                  }}
                >
                  <BasicTabs />
                </Box>
                <CartPopover />
              </Box>
              <AdminSidebar>
                <Typography variant="h5" textAlign={'center'}>
                  فروشگاه جینیس
                </Typography>
                <BasicTabs />
                <SidebarBottomNavigation />
              </AdminSidebar>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
