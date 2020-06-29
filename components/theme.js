import { createMuiTheme } from '@material-ui/core/styles';
import { black } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#6669A8',
    },
    error: {
      main: '#FFA631',
    },
    background: {
      default: '#1A1B36',
    },
    action: {
      hover: '#2C2E57',
    }
  },
  
});

export default theme;