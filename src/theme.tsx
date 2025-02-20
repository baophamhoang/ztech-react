import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: ['Montserrat Variable', 'sans-serif'].join(', '),
    fontSize: 14,
    h1: {
      fontFamily: ['Playfair Display Variable', 'serif'].join(', '),
      fontWeight: 900,
    },
    h2: {
      fontFamily: ['Playfair Display Variable', 'serif'].join(', '),
      fontSize: 60,
      [`@media (max-width: 821px)`]: { fontSize: 40 }, // md breakpoint
    },
    h4: {
      fontFamily: ['Playfair Display Variable', 'serif'].join(', '),
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
