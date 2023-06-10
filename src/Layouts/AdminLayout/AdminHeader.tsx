import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import BasicTabs from '@/Components/Tabs';
import React from 'react';
import Image from 'next/image';
import { Box, Button, Typography } from '@mui/material';

import Sidebar from '@/Components/sidebar';
import SidebarBottomNavigation from '@/Components/SidbarButtonNavigation';

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
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box>
              <Sidebar>
                <Typography variant="h5" textAlign={'center'}>
                  فروشگاه جینیس
                </Typography>
                <BasicTabs />
                <SidebarBottomNavigation />
              </Sidebar>
            </Box>
            <Image
              alt="logo"
              width={179}
              height={46}
              style={{ width: '100%', maxWidth: '179px' }}
              src={'/new-logo.png'}
            />

            <Box sx={{ display: 'flex', gap: '10px' }}>
              <Button sx={{ borderBottom: '1px solid black' }}>خروج</Button>
              <Button sx={{ borderBottom: '1px solid black' }}>داشبورد</Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
