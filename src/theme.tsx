import { Theme, createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#3D0814',
    },
    secondary: {
      main: '#C6B38E',
    },
    text: {
        primary: '#442F38',
        secondary: '#E7F9A9'
    }
  },
});

theme = responsiveFontSizes(theme);

export default theme;