import React from 'react';
import './base.css';
import Navs from './router';
import greenTheme from './theme/green';
import blueTheme from './theme/blue';
import { MuiThemeProvider } from 'material-ui/styles';
import PropTypes from 'prop-types';

class App extends React.Component {

  static childContextTypes = {
    changeTheme: PropTypes.func
  };
  
  state = {
    theme:blueTheme
  }
  
  getChildContext(){
    return {
      changeTheme:(data)=>{
        console.log(data);
      }
    }
  }
  render() {
    return (
      <MuiThemeProvider theme={this.state.theme}>
        <Navs/>
      </MuiThemeProvider>
    );
  }
}

export default App;