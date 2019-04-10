import React from "react";
import { Link } from "react-router-dom";
import LoggedInMenu from "./LoggedInMenu";
import LoggedOutMenu from "./LoggedOutMenu";
import { Layout, Menu, Icon } from 'antd';

const { Sider } = Layout;

const Navbar = () => {
	return (
        <Sider
            theme="light"
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => { console.log(broken); }}
            onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
        >
            <div className="logo" />
            <LoggedInMenu />
            <LoggedOutMenu />
            {/* <Menu theme="light" mode="inline" defaultSelectedKeys={['4']}>
                <Menu.Item key="1">
                    <Icon type="user" />
                    <span className="nav-text">nav 1</span>
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="video-camera" />
                    <span className="nav-text">nav 2</span>
                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="upload" />
                    <span className="nav-text">nav 3</span>
                </Menu.Item>
                <Menu.Item key="4">
                    <Icon type="user" />
                    <span className="nav-text">nav 4</span>
                </Menu.Item>
            </Menu> */}
        </Sider>
	);
};

export default Navbar;


