
import { createMuiTheme } from 'material-ui/styles';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';
import blue from 'material-ui/colors/blue';
import purple from 'material-ui/colors/purple';
import lightGreen from 'material-ui/colors/lightGreen';
const defaultTheme = createMuiTheme({
  palette: {
    primary: blue, 
    secondary: {
      ...green,
    },
    error: red,
  },

});

export default defaultTheme;
