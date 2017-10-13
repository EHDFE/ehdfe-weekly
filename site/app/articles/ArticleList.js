import React from 'react';
import {Layout, Menu, Icon} from 'antd';
// import SiderBar from './sideBar';
import Article from './Article'
const {Header, Content, Footer, Sider} = Layout;
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import style from './sideBar.css';
import navsData from './navsData';

class ArticleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        }
        this.choose();
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    choose() {
        var navs = navsData;
        let isNav = false;
        navs.forEach((nav, index) => {
            if (nav.url === this.props.location.pathname) {
                isNav = true;
                this.state = {
                    defaultSelectedKeys: [String(index)]
                }
            }
        })
        if (!isNav) {
            this.state = {
                defaultSelectedKeys: ['0']
            }
        }

    }
    render() {
        return (
            <Layout style={{
                marginTop: '64px'
            }}>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                    style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    zIndex: 9999
                }}
                    width="300">

                    <Menu
                        mode="inline"
                        defaultSelectedKeys={this.state.defaultSelectedKeys}
                        theme="dark"
                        className="navSiderMenu"
                        style={{
                        background: '#333'
                    }}>
                        {navsData.map((nav, key) => <Menu.Item key={key}>
                            <Icon type={nav.icon}/>
                            <span className="nav-text">
                                <Link to={nav.url}>{nav.name}</Link>
                            </span>
                        </Menu.Item>)
}
                    </Menu>
                    <div style={{textAlign:'center',marginTop:'20px'}}>
                        <Icon
                        className={style.trigger}
                        style={{
                            color:'#fff'
                        }}
                        type={this.state.collapsed
                        ? 'menu-unfold'
                        : 'menu-fold'}
                        onClick={this.toggle}/>
                    </div>

                </Sider>
                <Layout
                    style={{
                    marginLeft: this.state.collapsed
                        ? '64px'
                        : '300px'
                }}>
                    <Content
                        style={{
                        margin: '24px 16px 0',
                        overflow: 'initial'
                    }}>

                        <div
                            style={{
                            padding: 24,
                            background: '#fff'
                        }}>
                            <Icon
                                className={style.trigger}
                                type={this.state.collapsed
                                ? 'menu-unfold'
                                : 'menu-fold'}
                                onClick={this.toggle}/>
                            <Switch>
                                <Route path="/article/:url" component={Article}/>
                                <Route path="/" component={Article}/>
                            </Switch>
                        </div>
                    </Content>
                    <Footer
                        style={{
                        textAlign: 'center'
                    }}>
                        ©2017 Created by EHDFE
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}

export default ArticleList;