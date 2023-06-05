import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import BasicTabs from '@/Components/Tabs';
import React from 'react';
import Image from 'next/image';

export default function AdminHeader() {
  return (
    <React.Fragment>
      <AppBar sx={{ backgroundColor: 'white' }}>
        <Toolbar
          sx={{
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <BasicTabs />
          <Image
            alt="lsdj"
            width={179}
            height={46}
            style={{ width: '100%', maxWidth: '179px' }}
            src={'/logo.png'}
          />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
