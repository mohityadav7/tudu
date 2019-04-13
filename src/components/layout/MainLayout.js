import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from 'react-redux';
import "./MainLayout.css";
import { withRouter } from 'react-router-dom';

// import Navbar from "../layout/Navbar";
import CourseDetails from "../courses/CourseDetails";

import DashboardContent from "../dashboard/DashboardContent";
import SettingsContent from "../settings/SettingsContent";
import CoursesList from "../courses/CoursesList";
import SidebarMenu from './SidebarMenu';
import LayoutHeader from './LayoutHeader';
import LayoutFooter from './LayoutFooter';
import SidebarProfileCard from './SidebarProfileCard';

import { Drawer, Layout } from 'antd';
import 'antd/dist/antd.css';
import 'ant-design-pro/dist/ant-design-pro.min.css';
import NewAnnouncement from "../announcements/NewAnnouncement";

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
					title="Hi, Mohit!"
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
						<div className="App" style={{ padding: '24px' }}>
							<Route exact path='/dashboard' render={() => <DashboardContent announcements={this.props.announcements} />} />
							<Route exact path='/dashboard/course/:id' component={CourseDetails} />
							<Route path='/dashboard/courses' render={() => <CoursesList announcements={this.props.announcements} />} />
							<Route exact path='/dashboard/settings' component={SettingsContent} />
							<Route exact path='/dashboard/newAnnouncement' render={() => <NewAnnouncement/>} />
						</div>
					</Content>

					<LayoutFooter />
				</Layout>
			</Layout>
		);
	}
}

const mapStateToProps = (state) => {
	return{
		announcements: state.announcement.announcements
	}
}

export default withRouter(connect(mapStateToProps)(MainLayout));
