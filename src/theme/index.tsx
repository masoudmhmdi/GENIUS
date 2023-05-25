import { Components, createTheme } from '@mui/material';

const btn = (): Components['MuiButton'] => ({
  styleOverrides: {
    root: {
      borderRadius: '30px',
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
  },
});
