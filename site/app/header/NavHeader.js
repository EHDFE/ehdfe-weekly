import React from 'react';
import style from './NavHeader.css';
import {Layout, Menu, Icon} from 'antd';

const {Header} = Layout;
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom'



class NavHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Header
                style={{
                position: 'fixed',
                width: '100%',
                background:'#333',
                zIndex:2
            }}>
                  <div className={style.logo}>
                    易周刊
                </div>  
                <Menu
                    mode="horizontal"
                    theme="dark"
                    defaultSelectedKeys={['1']}
                    style={{
                    lineHeight: '64px',
                    background:'#333',
                    height:'65px'
                }}>
                    <Menu.Item key="1"><Link to="/article">周刊</Link></Menu.Item>
                    {/* <Menu.Item key="2">关于我们</Menu.Item> */}
                    <Menu.Item key="3"><a href="https://github.com/EHDFE">联系我们</a></Menu.Item>
                </Menu>
            </Header>
        )
    }
}

export default NavHeader;