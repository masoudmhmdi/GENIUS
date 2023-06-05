import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import BasicTabs from '@/Components/Tabs';
import React from 'react';
import Image from 'next/image';
import { Box, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function AdminHeader() {
  return (
    <React.Fragment>
      <AppBar sx={{ backgroundColor: 'white' }}>
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
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
            <Box
              sx={{
                display: {
                  sx: 'flex',
                  md: 'none',
                },
              }}
            >
              <Button>
                <MenuIcon fontSize="large" />
              </Button>
            </Box>
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
            <Image
              alt="lsdj"
              width={179}
              height={46}
              style={{ width: '100%', maxWidth: '179px' }}
              src={'/logo.png'}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
