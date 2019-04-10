import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

	render() {
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
						<SidebarMenu />
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
					<SidebarMenu />
				</Drawer> {/* /Drawer - for mobile site */}

				<Layout>
					<LayoutHeader showDrawer={this.showDrawer} /> {/* header for mobile site */}
					
					<Content>
						<BrowserRouter>
							<div className="App">
								<Switch>
									<Route exact path='/' component={DashboardContent} />
									<Route path='/course/:id' component={CourseDetails} />
									<Route path='/courses' component={CoursesList} />
									<Route path='/settings' component={SettingsContent} />
								</Switch>
							</div>
						</BrowserRouter>
					</Content>

					<LayoutFooter />
				</Layout>
			</Layout>
		);
	}
}

export default MainLayout;
