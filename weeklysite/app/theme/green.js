import { createMuiTheme } from 'material-ui/styles';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';
import blue from 'material-ui/colors/blue';
import purple from 'material-ui/colors/purple';
import lightGreen from 'material-ui/colors/lightGreen';
// console.log(green)
const greenTheme = createMuiTheme({
  palette: {
    primary: blue, 
    secondary: {
      ...green,
      // A400: '#00e677',
    },
    error: red,
  },
  // type:'dark'
});

export default greenTheme;