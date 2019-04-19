import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from 'react-redux';
import { withRouter, Redirect, Switch } from 'react-router-dom';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import "./MainLayout.css";

// import Navbar from "../layout/Navbar";
import CourseDetails from "../courses/CourseDetails";
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
    state = { visible: false, placement: 'left' };
    
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
		const match = this.props.match;
		const auth = this.props.auth;
		
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
						<SidebarMenu match={match} />
					</div>
				</Sider> {/* Sider -for desktop site */}
				
				{/*  Drawer - for mobile site */}
				<Drawer
					title={`Hi, ${this.props.profile.firstName}!`}
					placement={this.state.placement}
					closable={false}
					onClose={this.onClose}
					visible={this.state.visible}
				>
					<SidebarMenu hideDrawer={this.hideDrawer} />
				</Drawer> {/* /Drawer - for mobile site */}

				<Layout>
					<LayoutHeader showDrawer={this.showDrawer} /> {/* header for mobile site */}
					
					<Content>
						<div className="App" style={{  }}>
							<Switch>
								<Route exact path='/dashboard' render={() => <DashboardContent announcements={this.props.announcements} />} />
								<Route exact path='/dashboard/course/:id' component={CourseDetails} />
								<Route exact path='/dashboard/courses' render={() => <CoursesList announcements={this.props.announcements} />} />
								<Route exact path='/dashboard/settings' component={SettingsContent} />
								<Route exact path='/dashboard/newAnnouncement' render={() => <NewAnnouncement/>} />
								<Route exact path='/dashboard/newStudyMaterial' render={() => <NewStudyMaterial/>} />
								<Route exact path='/dashboard/announcements/:id' render={() => <Announcement announcements={this.props.announcements}/>} />
								<Route exact path='/dashboard/courses/:id' render={() => <CourseHome announcements={this.props.announcements}/>} />
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
		auth: state.firebase.auth,
		profile: state.firebase.profile
	}
}

export default compose(
	firestoreConnect([{collection: 'announcements', limit: 10, orderBy: ['createdAt', 'desc']}]),
	connect(mapStateToProps)
)(withRouter(MainLayout));