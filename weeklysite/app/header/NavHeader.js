import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch, Redirect,withRouter} from 'react-router-dom'
import {withStyles, createStyleSheet} from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import IconButton from 'material-ui/IconButton';
import Tabs, {Tab} from 'material-ui/Tabs';
import styleSheet from './NavHeaderStyle'
import PropTypes from 'prop-types';


const TabContainer = props => <div style={{
    padding: 20
}}>
    {props.children}
</div>;


class NavHeader extends React.Component {
    constructor(props){
        super(props)
       const {history } = this.props;
        this.state = {
            index: 0
        };
    }
    static contextTypes = {
        changeTheme: PropTypes.func
    };

    handleChange = (event, index) => {

        this.setState({index});
        if(index===0){
            this.props.history.push('/article');
        }else if(index===1){
           window.location='https://github.com/EHDFE/ehdfe-weekly';
        }
    };

    render() {
        const classes = this.props.classes;
        // console.log(this.context.changeTheme)
        this.context.changeTheme('shit')
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
                    {/* <IconButton className={classes.morevert}>
                        <MoreVertIcon />
                    </IconButton> */}
                </AppBar>
            </div>
        );
    }

}

export default withRouter(withStyles(styleSheet)(NavHeader));