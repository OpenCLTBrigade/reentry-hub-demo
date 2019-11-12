import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import { green, blue } from '@material-ui/core/colors';

let theme = createMuiTheme({
  palette: {
    primary: {
      dark: green[900],
      main: green[700],
      light: green[400]
    },
    secondary: {
      dark: blue[900],
      main: blue[400],
      light: blue[300]
    }
  },
  overrides: {}
})

theme = responsiveFontSizes(theme);

export { theme };