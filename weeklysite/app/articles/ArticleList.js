import React from 'react';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import List, {ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
import Hidden from 'material-ui/Hidden';
import withWidth from 'material-ui/utils/withWidth';
import navsData from './navsData';
import Article from './Article'
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import styleSheet from './ArticleListStyle'
import ListIcon from 'material-ui-icons/List';
import FormatIndentDecreaseIcon from 'material-ui-icons/FormatIndentDecrease';
import FormatIndentIncreaseIcon from 'material-ui-icons/FormatIndentIncrease';
import compose from 'recompose/compose';
import Grid from 'material-ui/Grid';
import './ArticleList.css';

class ArticleList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: {
                left: false
            },
            sidebar: true
        };
    }

    toggleDrawer = (side, open) => {
        const drawerState = {};
        drawerState[side] = open;
        this.setState({open: drawerState});
    };
    handleLeftOpen = () => this.toggleDrawer('left', true);
    handleLeftClose = () => this.toggleDrawer('left', false);
    handleSidebar = () => {
        this.setState({
            sidebar: !this.state.sidebar
        })
    }

    render() {
        let width = this.props.width;
        const classes = this.props.classes;
        const sideList = (
            <div className="sidelist">
                <List className={classes.list} disablePadding>
                    {navsData.map((nav, key) => <ListItem button key={key}>
                        <ListItemIcon>
                            {nav.icon()}
                        </ListItemIcon>
                        <Link to={nav.url}>{nav.name}</Link>
                    </ListItem>)
}
                </List>
            </div>
        );

        return (
            <div style={{
                marginTop: '48px'
            }}>
                { this.state.sidebar&&(< Hidden smDown > 
                <div className={classes.sideBar}>
                    {sideList}
                </div> 
                </Hidden>)}

                <div
                    style={{
                    paddingLeft: (((width === 'lg' || width === 'xl' || width === 'md'))&&this.state.sidebar
                        ? '250px'
                        : '0px')
                }}>
                    <div className={classes.content}>
                        <div className={classes.article}>
                            <Hidden mdUp>
                                <Button raised className={classes.button} onClick={this.handleLeftOpen}>展开列表</Button>
                            </Hidden>
                            <Hidden smDown>
                                <div className={classes.sideButton} onClick={this.handleSidebar}>
                                    {this.state.sidebar?<FormatIndentDecreaseIcon/>:<FormatIndentIncreaseIcon/>}
                                </div>
                            </Hidden>
                            <Switch>
                                <Route path="/article/:url" component={Article}/>
                                <Route path="/" component={Article}/>
                            </Switch>
                        </div>
                    </div>
                    <div className={classes.footer}>
                        ©2017 Created by EHDFE
                    </div>
                </div>

                <Hidden mdUp>
                    <Button
                        fab
                        className={classes.button}
                        style={{
                        position: 'fixed',
                        right: '50px',
                        bottom: '40px'
                    }}
                        onClick={this.handleLeftOpen}>
                        <ListIcon/>
                    </Button>
                </Hidden>
                <Drawer
                    open={this.state.open.left}
                    onRequestClose={this.handleLeftClose}
                    onClick={this.handleLeftClose}>
                    {sideList}
                </Drawer>
            </div>
        )
    }
}

export default compose(withStyles(styleSheet), withWidth())(ArticleList);