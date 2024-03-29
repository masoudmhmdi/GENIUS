import { Theme } from '@emotion/react';
import { Components, createTheme } from '@mui/material';

const btn = (): Components['MuiButton'] => ({
  styleOverrides: {
    root: {
      borderRadius: '6px',
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
const MuiTextFieldStyle = (): Components['MuiTextField'] => ({
  styleOverrides: {
    root: {
      borderRadius: '0px',
    },
  },
});
const MuiLink = (): Components['MuiLink'] => ({
  styleOverrides: {
    root: {
      textDecoration: 'none',
      color: '#212529',
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
    success: {
      main: '#A4D0A4',
      contrastText: '#617A55',
    },
    error: {
      main: '#FA9884',
      contrastText: '#ff0028',
    },
  },
  components: {
    MuiButton: btn(),
    MuiToolbar: MuiToolbarStyle(),
    MuiTextField: MuiTextFieldStyle(),
    MuiLink: MuiLink(),
  },
  direction: 'rtl',
  typography: {
    fontFamily: 'vaz',
  },
});
