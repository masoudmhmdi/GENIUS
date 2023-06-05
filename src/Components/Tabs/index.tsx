import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import getUserData from '@/utils/getUserData';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [isAdmin, setIsAdmin] = React.useState(false);
  const router = useRouter();
  console.log(router.pathname);
  React.useEffect(() => {
    const { user } = getUserData();
    console.log(user.role);
    if (user.role === 'ADMIN') {
      setIsAdmin(true);
    }

    const pathName = router.pathname;
    console.log(pathName);

    switch (pathName) {
      case '/':
        setValue(0);
        break;
      case '/cart':
        setValue(1);
        break;
      case '/admin/products':
        setValue(2);
        break;
      case '/admin/orders':
        setValue(2);
        break;
      case '/admin/inventory':
        setValue(2);
        break;

      default:
        break;
    }
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab onClick={() => router.push('/')} label=" خانه" {...a11yProps(0)} />
        <Tab
          onClick={() => router.push('/cart')}
          label="سبد خرید"
          {...a11yProps(0)}
        />
        {isAdmin && (
          <Tab
            onClick={() => router.push('/admin/orders')}
            label="مدیریت"
            {...a11yProps(1)}
          />
        )}
      </Tabs>
    </Box>
  );
}
