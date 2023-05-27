import { AppBar, Box, ButtonGroup, Toolbar, Typography } from '@mui/material';

export default function Footer() {
  return (
    <AppBar position="static" sx={{ top: '100%' }} component={'footer'}>
      <Toolbar>
        <Typography sx={{ margin: '0 auto' }}>hello this is footer</Typography>
      </Toolbar>
    </AppBar>
  );
}
