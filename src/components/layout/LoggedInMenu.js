import React from "react";
// import { NavLink } from "react-router-dom";
import { Menu, Icon } from 'antd';


const LoggedInMenu = () => {
	return (
        <Menu theme="light" mode="inline" defaultSelectedKeys={['4']}>
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
        </Menu>
	);
};

export default LoggedInMenu;
