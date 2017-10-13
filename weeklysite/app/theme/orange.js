import { createMuiTheme } from 'material-ui/styles';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';
import blue from 'material-ui/colors/blue';
import purple from 'material-ui/colors/purple';
import lightGreen from 'material-ui/colors/lightGreen';
import grey from 'material-ui/colors/green';
import orange from 'material-ui/colors/orange';
import yellow from 'material-ui/colors/yellow';

// console.log(green)
const orangeTheme = createMuiTheme({
    palette: {
        primary: orange, 
        secondary: {
          ...yellow,
          // A400: '#00e677',
        },
        error: red,
      },
});

export default orangeTheme;