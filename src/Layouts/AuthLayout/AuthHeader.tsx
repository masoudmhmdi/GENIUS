import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import Image from 'next/image';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children?: React.ReactElement;
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

export default function AuthHeader(props: Props) {
  const router = useRouter();

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar sx={{ backgroundColor: 'white' }}>
          <Toolbar sx={{ backgroundColor: 'white' }}>
            {/* <Image
              alt="Logo"
              width={179}
              height={46}
              style={{ width: '100%', maxWidth: '179px' }}
              src={'/logo.png'}
            /> */}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
}
