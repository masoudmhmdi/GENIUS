import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import BasicTabs from '../Tabs';
import SidebarBottomNavigation from '../SidbarButtonNavigation';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from '@mui/material';
import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const admin = router.pathname.split('/')[1];

  return (
    <Box
      sx={{
        display: {
          sx: 'flex',
          md: 'none',
        },
      }}
    >
      <Box>
        <Button onClick={() => setOpen(true)}>
          <MenuIcon fontSize="large" />
        </Button>
      </Box>
      <Drawer anchor={'left'} open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            display: 'flex',
            gap: '15px',
            flexDirection: 'column',
            marginTop: '10px',
          }}
        >
          <Typography variant="h5" textAlign={'center'}>
            {admin === 'admin' ? ' پنل مدیریت فروشگاه' : 'جینیس شاپ'}
          </Typography>
          <BasicTabs />
          <SidebarBottomNavigation />
        </Box>
      </Drawer>
    </Box>
  );
}
