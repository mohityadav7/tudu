import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, Icon } from "antd";

export default function SidebarMenu({ match, hideDrawer }) {
	return (
		<Menu
			theme="light"
			mode="inline"
			defaultSelectedKeys={["1"]}
			style={{ padding: "0 0" }}
			onClick={hideDrawer}>
			<Menu.Item key="1">
				<NavLink to={`/dashboard`}>
					<Icon type="home" />
					<span className="nav-text">Dashboard</span>
				</NavLink>
			</Menu.Item>
			<Menu.Item key="2">
				<NavLink to={`/dashboard/courses`}>
					<Icon type="book" />
					<span className="nav-text">Courses</span>
				</NavLink>
			</Menu.Item>
			<Menu.Item key="3">
				<NavLink to={`/dashboard/settings`}>
					<Icon type="setting" />
					<span className="nav-text">Settings</span>
				</NavLink>
			</Menu.Item>
			<Menu.Item key="4">
				<Link to="/auth/login">
					<Icon type="user" />
					<span className="nav-text">Log Out</span></Link>
			</Menu.Item>
		</Menu>
	);
}
