import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch, Redirect,withRouter} from 'react-router-dom'
import {withStyles, createStyleSheet} from 'material-ui/styles';
import Menu, { MenuItem } from 'material-ui/Menu';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import IconButton from 'material-ui/IconButton';
import Tabs, {Tab} from 'material-ui/Tabs';
import styleSheet from './NavHeaderStyle'
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import * as Changetheme from '../actions';
import { bindActionCreators } from 'redux';
import * as themes from '../theme';


const TabContainer = props => <div style={{
    padding: 20
}}>
    {props.children}
</div>;

const options = Object.keys(themes);
  
const ITEM_HEIGHT = 48;
class NavHeader extends React.Component {
    constructor(props){
        super(props)
       const {history } = this.props;
        this.state = {
            index: 0,
            anchorEl: null,
            open: false,
        };
    }

    handleChange = (event, index) => {

        this.setState({index});
        if(index===0){
            this.props.history.push('/article');
        }else if(index===1){
           window.location='https://github.com/EHDFE/ehdfe-weekly';
        }
    };

    handleClick = event => {
        this.setState({ open: true, anchorEl: event.currentTarget });
      };
    
    handleRequestClose = (value) => {
        this.setState({ open: false });
        this.props.actions.changeTheme(themes[value]);
        localStorage.setItem('theme', value);
    };
    render() {
        const classes = this.props.classes;
        console.log(themes,999)
        // this.props.actions.changeTheme('defaultTheme');
        return (
            <div className={classes.root}>
                <AppBar position="fixed" className={classes.header}>
                    <div className={classes.logo}>
                        易周刊
                    </div>
                    <Tabs value={this.state.index} onChange={this.handleChange} className={classes.tab}>
                        <Tab label="周刊 "><Link  to="/article">周刊</Link></Tab>
                        <Tab label="联系我们"><a  href="https://github.com/EHDFE">联系我们</a></Tab>
                    </Tabs>
                    <div>
                        <IconButton
                            aria-label="More"
                            aria-owns={this.state.open ? 'long-menu' : null}
                            aria-haspopup="true"
                            onClick={this.handleClick}
                            className={classes.morevert}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id="long-menu"
                            anchorEl={this.state.anchorEl}
                            open={this.state.open}
                            onRequestClose={this.handleRequestClose}
                            PaperProps={{
                                style: {
                                    maxHeight: ITEM_HEIGHT * 4.5,
                                    width: 200,
                                },
                            }}
                        >
                            {options.map(option => (
                            <MenuItem key={option}  onClick={()=>this.handleRequestClose(option)}>
                            {option}
                            </MenuItem>
                            ))}
                        </Menu>
                    </div>
                </AppBar>
            </div>
        );
    }

}


const mapStateToProps = state => ({
    theme: state.theme
  })
const mapDispatchToProps = dispatch => ({
      actions : bindActionCreators(Changetheme, dispatch)
})
  

export default compose(connect(mapStateToProps,mapDispatchToProps),withRouter,withStyles(styleSheet))(NavHeader);