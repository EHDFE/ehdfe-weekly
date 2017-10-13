import React from 'react';
import {Layout, Menu, Icon} from 'antd';
import './sideBar.css'
const {Sider} = Layout;
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom'

class SiderBar extends React.Component {
    constructor(props) {
        super(props);
        this.choose();
    }


    choose() {
        var navs = this.props.navs.navsData;
        let isNav = false;
        navs.forEach((nav, index) => {
            if (nav.url === this.props.location.pathname) {
                isNav =true;
                this.state = {defaultSelectedKeys: [String(index)]}
            }
        })
        if(!isNav){
            this.state= {defaultSelectedKeys: ['0']}
        }

    }

    render() {
        var navs = this.props.navs.navsData;

        return (
            <Sider
                width="300"
                style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                background: '#333',
                left: 0,
                top: '64px',
                zIndex:2
            }}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={this.state.defaultSelectedKeys}
                    theme="dark"
                    className="navSiderMenu"
                    style={{
                    background: '#333'
                }}>
                    {navs.map((nav, key) => <Menu.Item key={key}>
                        <Icon type={nav.icon}/>
                        <span className="nav-text">
                            <Link to={nav.url}>{nav.name}</Link>
                        </span>
                    </Menu.Item>)
}
                </Menu>
            </Sider>
        )
    }
}

export default SiderBar;