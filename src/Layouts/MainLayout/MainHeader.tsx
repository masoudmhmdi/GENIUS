import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import { Button } from '@mui/material';
import BasicTabs from '@/Components/Tabs';
import { json } from 'stream/consumers';
import getUserData from '@/utils/getUserData';
import { GetStaticProps } from 'next';
import React, { useEffect, useState } from 'react';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children?: React.ReactElement;
  data?: any;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children!}
    </Slide>
  );
}

export default function MainHeader(props: Props) {
  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar sx={{ backgroundColor: 'white' }}>
          <Toolbar sx={{ backgroundColor: 'white' }}>
            <BasicTabs />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   const data = localStorage.getItem('data');
//   console.log(data);
//   return {
//     props: {
//       data,
//     },
//   };
// };
