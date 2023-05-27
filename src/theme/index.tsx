import { Components, createTheme } from '@mui/material';

const btn = (): Components['MuiButton'] => ({
  styleOverrides: {
    root: {
      borderRadius: '30px',
    },
  },
});

const MuiToolbarStyle = (): Components['MuiToolbar'] => ({
  styleOverrides: {
    root: {
      maxWidth: '1200px',
      width: '100%',
      margin: '0 auto',
    },
  },
});

export const theme = createTheme({
  palette: {
    primary: {
      main: '#212529',
    },
    secondary: {
      main: '#F3F3F3',
    },
  },
  components: {
    MuiButton: btn(),
    MuiToolbar: MuiToolbarStyle(),
  },
});
