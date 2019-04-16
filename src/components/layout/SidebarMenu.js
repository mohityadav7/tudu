import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Icon } from "antd";
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SidebarMenu = (props) => {
	return (
		<Menu
			theme="light"
			mode="inline"
			defaultSelectedKeys={["1"]}
			style={{ padding: "0 0" }}
			onClick={props.hideDrawer}>
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
				<span onClick={ props.signOut }>
					<Icon type="user" />
					<span className="nav-text">Log Out</span>
				</span>
			</Menu.Item>
		</Menu>
	);
}

const mapDispatchToProps = (dispatch) => {
	return {
		signOut: () => dispatch(signOut())
	}
}

export default connect(null, mapDispatchToProps)(SidebarMenu);