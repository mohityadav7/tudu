import React, { Component } from 'react';
import Notifications from './Notifications';
// import WrappedNormalLoginForm from './Notifications';
import CoursesList from '../courses/CoursesList';
import { Drawer, Layout, Menu, Icon, Row, Col, Avatar } from 'antd';
import NotificationMenu from './NotificationMenu';
import './Dashboard.css';

const {
  Header, Content, Footer, Sider,
} = Layout;

class Dashboard extends Component {
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

    render(){
        return(
            <Layout>
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

                        <div className="profile-card" style={{ display: 'block', padding: '24px' }} >
                            <div className="profile-card-info-container" >
                                <Avatar size={64} icon="user" style={{ margin: 'auto', display: 'block' }} />
                                <span class="greet-user" style={{ textAlign: 'center', 'display': 'block', paddingTop: '12px' }}>Hi, Mohit</span>
                            </div>
                        </div>

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
                    </div>
                </Sider>
                <Drawer
                    title="Hi, Mohit!"
                    placement={this.state.placement}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} style={{ padding: '0 0' }} >
                        <Menu.Item key="1">
                            <Icon type="user" />
                            <span className="nav-text">nav 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <span className="nav-text">nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <span className="nav-text">nav 3</span>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Icon type="user" />
                            <span className="nav-text">nav 4</span>
                        </Menu.Item>
                    </Menu>
                </Drawer>
                <Layout>
                    <Header id="navMenu" style={{ background: '#fff', padding: 0, position: 'fixed', zIndex: 1, width: '100%' }} >
                        <div className="logo" />
                        <div>
                            <div style={{ float: 'left' }}>
                                {/* <Menu
                                    theme="light"
                                    mode="horizontal"
                                    defaultSelectedKeys={['1']}
                                    style={{ lineHeight: '64px' }}
                                    inlineCollapsed = {false}
                                > */}
                                    {/* <Menu.Item key="1"> */}
                                        <Icon onClick={this.showDrawer} 
                                            type="menu-unfold"
                                            style={{ 
                                                padding: '22px 16px 22px 32px',
                                                fontSize: '20px',
                                            }}
                                        />
                                    {/* </Menu.Item> */}
                                {/* </Menu> */}
                            </div>
                            <div style={{ float: 'right' }}>
                                {/* <Menu
                                    theme="light"
                                    mode="horizontal"
                                    defaultSelectedKeys={['1', '2']}
                                    style={{ lineHeight: '64px' }}
                                    inlineCollapsed = {false}
                                >
                                    <Menu.Item> */}
                                        <Icon onClick={this.showDrawer} type="notification" style={{ padding: '22px 16px', fontSize: '20px' }} />
                                    {/* </Menu.Item> */}

                                    {/* <Menu.Item> */}
                                        <NotificationMenu />
                                    {/* </Menu.Item> */}
                                {/* </Menu> */}
                            </div>
                        </div>
                    </Header>
                    <Content style={{ width: '100%' }}>
                        <div style={{ padding: '12px 24px', background: '#fff', minHeight: 360 }}>
                            <Row>
                                <Col xs={24} sm={16} md={16} lg={16} xl={16} >
                                    <CoursesList style={{ margin: '24px' }} />
                                </Col>
                                <Col xs={24} sm={8} md={8} lg={8} xl={8} >
                                    <Notifications />
                                </Col>
                            </Row>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        tudu ©2019 Created by Mohit
                    </Footer>
                </Layout>
            </Layout>
            // {/* <div className="dashboard container">
            //     <div className="row">
            //         <div className="col s12 m6">
            //             <DatePicker />
            //             <CoursesList />
            //         </div>
            //         {/* notifications */}
            //         <div className="col s12 m5 offset-m1">
            //             <Notifications />
            //             {/* <WrappedNormalLoginForm /> */}
            //         </div>
            //     </div>
            // </div> */}
        )
    }
}

export default Dashboard;