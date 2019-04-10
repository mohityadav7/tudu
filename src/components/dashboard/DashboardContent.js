import React from 'react';
import { Row, Col } from 'antd';
import CoursesList from '../courses/CoursesList';
import Notifications from './Notifications';

const DashboardContent = () => {
  return (
    <div>
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
    </div>
  )
}

export default DashboardContent;
