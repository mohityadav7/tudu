import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Icon } from "antd";

export default function SidebarMenu({ match, hideDrawer }) {

	// const handleClick = ({ item, key, keyPath }) => {
	// 	// console.log(item);
	// 	console.log(typeof key);
	// 	// console.log(keyPath);
	// 	if (key === "1") {
	// 		console.log("home");
	// 		window.location.pathname = "/";
	// 	} else if (key === "2") {
	// 		console.log("courses");
	// 		window.location.pathname = "/courses";
	// 	} else if (key === "3") {
	// 		console.log("settins");
	// 		window.location.pathname = "/settings";
	// 	} else if (key === "4") {
	// 		console.log("logout");
	// 		window.location.pathname = "/logout";
	// 	}
	// };

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
				<Icon type="user" />
				<span className="nav-text">Log Out</span>
			</Menu.Item>
		</Menu>
	);
}
