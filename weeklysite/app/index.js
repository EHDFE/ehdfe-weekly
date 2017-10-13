import React from 'react';
import './base.css';
import Navs from './router';
import { defaultTheme } from './theme';

import { MuiThemeProvider } from 'material-ui/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Changetheme from './actions';
import { bindActionCreators } from 'redux';


console.log(defaultTheme,88)
class App extends React.Component {  
  state = {
    theme:defaultTheme
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps.theme,444)
    this.setState({theme:nextProps.theme})
  }

  render() {
    return (
      <MuiThemeProvider theme={this.state.theme}>
        <Navs/>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  theme: state.theme
})

const mapDispatchToProps = dispatch => ({
    actions : bindActionCreators(Changetheme, dispatch)
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);