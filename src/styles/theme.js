import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main:  '#01313f',
    },
    secondary: {
      main:  '#00b3e6'
    },
    error: {
      main: red.A400
    },
    type: "light"
  },
  typography: {
    useNextVariants: true
  }
});

export default theme;