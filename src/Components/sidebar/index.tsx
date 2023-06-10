import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import BasicTabs from '../Tabs';
import SidebarBottomNavigation from '../SidbarButtonNavigation';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from '@mui/material';
import { useRouter } from 'next/dist/client/router';
import { ReactNode, useState } from 'react';

export default function Sidebar({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const admin = router.pathname.split('/')[1];

  return (
    <Box>
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
            paddingX: '12px',
          }}
        >
          {children}
        </Box>
      </Drawer>
    </Box>
  );
}
