import React from 'react';
import { Row, Col } from 'antd';
import CoursesList from '../courses/CoursesList';
import AnnouncementList from '../announcements/AnnouncementList';
import Notifications from './Notifications';
import CustomPageHeader from '../layout/CustomPageHeader';

class DashboardContent extends React.Component {
    render() {

        const routes = [
            {
                path: '/',
                breadcrumbName: 'Home'
            },
            {
                path: '/dashboard',
                breadcrumbName: 'Dashboard'
            }
        ]

        return (
            <div>
                <CustomPageHeader routes={routes} title="Dashboard" />
                <div style={{ minHeight: 360, padding: '16px' }}>
                    <Row gutter={{xs: 0, sm: 0, md: 12, lg: 12, xl: 16, xxl: 16}}>
                        <Col xs={24} sm={16} md={16} lg={16} xl={16} >
                            <div>
                                <h3 style={{ 
                                    padding: '16px',
                                    backgroundColor: '#ffffff',
                                    borderTop: '1px solid #e8e8e8',
                                    borderLeft: '1px solid #e8e8e8',
                                    borderRight: '1px solid #e8e8e8',
                                    marginBottom: 0
                                 }}>Announcements</h3>
                                <AnnouncementList isTeacher={this.props.isTeacher} announcements={this.props.announcements} />
                                <h3 style={{ 
                                    padding: '16px',
                                    backgroundColor: '#ffffff',
                                    borderTop: '1px solid #e8e8e8',
                                    borderLeft: '1px solid #e8e8e8',
                                    borderRight: '1px solid #e8e8e8',
                                    marginBottom: 0,
                                    marginTop: 12
                                 }}>Courses</h3>
                                <CoursesList courses={this.props.btechItCourses} />
                            </div>
                        </Col>
                        <Col xs={24} sm={8} md={8} lg={8} xl={8} >
                            <Notifications />
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default DashboardContent;
