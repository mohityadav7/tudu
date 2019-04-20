import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, Icon } from "antd";
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SubMenu = Menu.SubMenu;

class SidebarMenu extends Component{

	componentDidMount() {
		// set course when page is opened for the first time, useful if course link is opened and not changed from sidebar
		let href = window.location.href.split('/');
		href = href[href.length-1];
		this.props.setCourse(href);
	}
	

	render() {

		// to show courses in sidebar menu
		const { courses } = this.props;
		
		// get last string after last '/' in url
		let href = window.location.href.split('/');
		href = href[href.length-1];
		
		// update course on change in menu item
		const updateCourse = ({key}) => {
			this.props.setCourse(key);
		}
	
		return (
			<Menu
				theme="light"
				mode="inline"
				defaultSelectedKeys={["dashboard"]}
				selectedKeys={[href]}
				style={{ padding: "0 0" }}
				onClick={this.props.hideDrawer}
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
								<Menu.Item onClick={updateCourse} key={course.code}><Link to={`/dashboard/courses/it/${course.code}`}>{course.short}</Link></Menu.Item>
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
					<span onClick={ this.props.signOut }>
						<Icon type="user" />
						<span className="nav-text">Log Out</span>
					</span>
				</Menu.Item>
			</Menu>
		);
	}
} 

const mapDispatchToProps = (dispatch) => {
	return {
		signOut: () => dispatch(signOut())
	}
}

export default connect(null, mapDispatchToProps)(SidebarMenu);