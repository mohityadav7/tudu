import React from 'react';
import { Menu, Icon } from 'antd';

export default function SidebarMenu() {
  return (
      <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} style={{ padding: '0 0' }} >
        <Menu.Item key="1">
            <Icon type="home" />
            <span className="nav-text">Dashboard</span>
        </Menu.Item>
        <Menu.Item key="2">
            <Icon type="book" />
            <span className="nav-text">Courses</span>
        </Menu.Item>
        <Menu.Item key="3">
            <Icon type="setting" />
            <span className="nav-text">Settings</span>
        </Menu.Item>
        <Menu.Item key="4">
            <Icon type="user" />
            <span className="nav-text">Log Out</span>
        </Menu.Item>
    </Menu>
  )
}