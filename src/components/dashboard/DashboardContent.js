import React from 'react';
import { Row, Col } from 'antd';
import CoursesList from '../courses/CoursesList';
import AnnouncementList from '../announcements/AnnouncementList';
import Notifications from './Notifications';

class DashboardContent extends React.Component {
    render() {
        return (
            <div style={{ minHeight: 360 }}>
                <Row>
                    <Col xs={24} sm={16} md={16} lg={16} xl={16} >
                        <div>
                            <h3>Announcements</h3>
                            <AnnouncementList announcements={this.props.announcements} />
                            <h3>Courses</h3>
                            <CoursesList announcements={this.props.announcements} />
                        </div>
                    </Col>
                    <Col xs={24} sm={8} md={8} lg={8} xl={8} >
                        <Notifications />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default DashboardContent;
