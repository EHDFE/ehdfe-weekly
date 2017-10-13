

import { createMuiTheme } from 'material-ui/styles';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';
import blue from 'material-ui/colors/blue';
import purple from 'material-ui/colors/purple';
import lightGreen from 'material-ui/colors/lightGreen';
import grey from 'material-ui/colors/green';

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
});

export default greenTheme;