import {Layout, Menu, Breadcrumb, Icon} from 'antd';
const {SubMenu} = Menu;
const {Header, Content, Footer} = Layout;
import React from 'react';

import NavHeader from './header/NavHeader';
import ArticleList from './articles/ArticleList';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom'


const basename = BASEPATH;
class Navs extends React.Component {
    render() {
        return (
            <Router basename={basename}>
                <Layout>
                    <NavHeader/>
                    <Switch>
                          <Route path="/article" component={ArticleList}/>
                           <Route path="/" component={ArticleList}/> 
                    </Switch>
                    
                </Layout>
            </Router>
        );
    }
}

export default Navs;