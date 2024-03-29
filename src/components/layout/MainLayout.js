import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from 'react-redux';
import { withRouter, Redirect, Switch } from 'react-router-dom';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Tag } from 'antd';
import "./MainLayout.css";

// import Navbar from "../layout/Navbar";
import DashboardContent from "../dashboard/DashboardContent";
import SettingsContent from "../settings/SettingsContent";
import CoursesList from "../courses/CoursesList";
import SidebarMenu from './SidebarMenu';
import LayoutHeader from './LayoutHeader';
import LayoutFooter from './LayoutFooter';
import SidebarProfileCard from './SidebarProfileCard';
import NewAnnouncement from "../announcements/NewAnnouncement";
import NewStudyMaterial from "../studyMaterial/NewStudyMaterial";
import Announcement from "../announcements/Announcement";
import CourseHome from "../courses/CourseHome";

import { Drawer, Layout } from 'antd';
import 'antd/dist/antd.css';
import 'ant-design-pro/dist/ant-design-pro.min.css';

const { Sider, Content } = Layout;

class MainLayout extends Component {
    state = { 
		visible: false,
		placement: 'left',
		course: null
	};

	setCourse = (course) => {
		console.log('course changed to ', course);
		this.setState({
			course: course
		})
	}
    
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    hideDrawer = () => {
        this.setState({
            visible: false,
        });
    }
    
    onClose = () => {
        this.setState({
            visible: false,
        });
	};
    
	render() {
		const auth = this.props.auth;
		const profile = this.props.profile;
		
		if(!auth.uid) {
			return <Redirect to="/auth/login"></Redirect>
		}

		return (
			<Layout>
				{/* Sider - for desktop site */}
				<Sider
					theme="light"
					breakpoint="md"
					collapsedWidth="0"
					onBreakpoint={(broken) => { console.log(broken); }}
					onCollapse={(collapsed, type) => {
						console.log(collapsed, type);
					}}
				>
					<div>
						<SidebarProfileCard />
						{/* passing match in sidebar menu is necessary to show the correct active menu item */}
						<SidebarMenu setCourse={this.setCourse} courses={this.props.btechItCourses} />
					</div>
				</Sider> {/* Sider -for desktop site */}
				
				{/*  Drawer - for mobile site */}
				<Drawer
					title={ this.props.profile.isTeacher ? (
							<div>
								<div style={{ textAlign: 'center' }}>{`Hi, ${this.props.profile.firstName}!`}</div>
								<div style={{ textAlign: 'center', 'display': 'block', paddingTop: '12px' }}><Tag color="cyan">Teacher</Tag></div>
							</div>
						) : <span>{`Hi, ${this.props.profile.firstName}!`}</span>
					}
					placement={this.state.placement}
					closable={false}
					onClose={this.onClose}
					visible={this.state.visible}
				>
					{/* passing match in sidebar menu is necessary to show the correct active menu item */}
					<SidebarMenu setCourse={this.setCourse} courses={this.props.btechItCourses} hideDrawer={this.hideDrawer} />
				</Drawer> {/* /Drawer - for mobile site */}

				<Layout>
					<LayoutHeader showDrawer={this.showDrawer} /> {/* header for mobile site */}
					
					<Content>
						<div className="App" style={{  }}>
							<Switch>
								<Route exact path='/dashboard' render={() => <DashboardContent isTeacher={profile.isTeacher} course={this.state.course} announcements={this.props.announcements} btechItCourses={this.props.btechItCourses} />} />
								<Route exact path='/dashboard/courses' render={() => <CoursesList announcements={this.props.announcements} />} />
								<Route exact path='/dashboard/settings' component={SettingsContent} />
								<Route exact path='/dashboard/newAnnouncement' render={() => <NewAnnouncement course={this.state.course} isTeacher={profile.isTeacher} />} />
								<Route exact path='/dashboard/newStudyMaterial' render={() => <NewStudyMaterial isTeacher={profile.isTeacher} />} />
								<Route exact path='/dashboard/announcements/:course/:id' render={(props) => <Announcement {...props} announcements={this.props.announcements}/>} />
								<Route exact course={this.state.course} path='/dashboard/courses/it/:code' render={(props) => <CourseHome {...props} isTeacher={profile.isTeacher} course={this.state.course} announcements={this.props.announcements}/>} />
							</Switch>
						</div>
					</Content>

					<LayoutFooter />
				</Layout>
			</Layout>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state)
	return{
		announcements: state.firestore.ordered.announcements,
		btechItCourses: state.firestore.ordered['btech-it-courses'],
		auth: state.firebase.auth,
		profile: state.firebase.profile
	}
}

export default compose(
	firestoreConnect([{collection: 'announcements', limit: 10, orderBy: ['createdAt', 'desc']}, {collection: 'btech-it-courses'}]),
	connect(mapStateToProps)
)(withRouter(MainLayout));