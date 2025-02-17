import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(', '),
    h1: {
      fontFamily: ['playfair-display', 'serif'].join(', '),
    },
    h2: {
      fontFamily: ['playfair-display', 'serif'].join(', '),
    },
    h4: {
      fontFamily: ['playfair-display', 'serif'].join(', '),
    },
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
