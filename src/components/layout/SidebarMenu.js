import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, Icon } from "antd";
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SubMenu = Menu.SubMenu;

const SidebarMenu = (props) => {

	const { courses } = props;

	let href = window.location.href.split('/');
	href = href[href.length-1];

	return (
		<Menu
			theme="light"
			mode="inline"
			defaultSelectedKeys={["dashboard"]}
			selectedKeys={[href]}
			style={{ padding: "0 0" }}
			onClick={props.hideDrawer}
			defaultOpenKeys={["courses"]}
		>
			<Menu.Item key="dashboard">
				<NavLink to={`/dashboard`}>
					<Icon type="home" />
					<span className="nav-text">Dashboard</span>
				</NavLink>
			</Menu.Item>
			{/* <Menu.Item key="courses">
				<NavLink to={`/dashboard/courses`}>
					<Icon type="book" />
					<span className="nav-text">Courses</span>
				</NavLink>
			</Menu.Item> */}
			<SubMenu key="courses" title={<span><Icon type="book" /><span>Courses</span></span>}>
				{	
					courses ?
					courses[0]['sem6'].map(course => {
						return (
							<Menu.Item key={course.code}><Link to={`/dashboard/courses/it/${course.code}`}>{course.short}</Link></Menu.Item>
						)
					}) : (
							<Menu.Item key="loading">Loading...</Menu.Item>
					)
				}
			</SubMenu>
			<Menu.Item key="settings">
				<NavLink to={`/dashboard/settings`}>
					<Icon type="setting" />
					<span className="nav-text">Settings</span>
				</NavLink>
			</Menu.Item>
			<Menu.Item key="signOut">
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