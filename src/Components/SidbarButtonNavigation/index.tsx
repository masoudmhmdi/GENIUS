import { Box, Button } from '@mui/material';
import Link from 'next/link';
import React, { ReactElement, useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';

type IMood = {
  btn1: 'secondary' | 'primary';
  btn2: 'secondary' | 'primary';
  btn3: 'secondary' | 'primary';
};

function SidebarBottomNavigation() {
  const [mood, setMood] = useState<IMood>({
    btn1: 'secondary',
    btn2: 'secondary',
    btn3: 'secondary',
  });
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const targetName = (e.target as HTMLButtonElement).name;
    const initState: IMood = {
      btn1: 'secondary',
      btn2: 'secondary',
      btn3: 'secondary',
    };
    initState[targetName as keyof IMood] = 'primary';
    setMood(initState);
  };
  const router = useRouter();

  const pathName = router.pathname;

  useEffect(() => {
    switch (pathName) {
      case '/admin/orders':
        setMood((prev) => {
          return { ...prev, btn1: 'primary' };
        });
        break;
      case '/admin/inventory':
        setMood((prev) => {
          return { ...prev, btn2: 'primary' };
        });
        break;
      case '/admin/products':
        setMood((prev) => {
          return { ...prev, btn3: 'primary' };
        });
        break;
      default:
        break;
    }
  }, [pathName]);
  return (
    <Box
      sx={{
        padding: '10px 6px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <Link href={'/admin/orders'}>
        <Button
          onClick={(e) => {
            handleClick(e);
          }}
          fullWidth
          color={mood.btn1}
          variant="contained"
          name="btn1"
        >
          سفارشات
        </Button>
      </Link>

      <Link href={'/admin/inventory'}>
        <Button
          fullWidth
          onClick={(e) => {
            handleClick(e);
          }}
          name="btn2"
          color={mood.btn2}
          variant="contained"
        >
          موجودی
        </Button>
      </Link>
      <Link href={'/admin/products'}>
        <Button
          fullWidth
          onClick={(e) => {
            handleClick(e);
          }}
          name="btn3"
          color={mood.btn3}
          variant="contained"
        >
          محصولات
        </Button>
      </Link>
      <Button fullWidth color="secondary" variant="contained">
        داشبورد
      </Button>
      <Button fullWidth color="secondary" variant="contained">
        خروج
      </Button>
    </Box>
  );
}

export default SidebarBottomNavigation;
