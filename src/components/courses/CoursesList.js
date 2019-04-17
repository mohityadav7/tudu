import React from 'react'
import CourseCard from './CourseCard'
import {Row, Col} from 'antd'
import './CourseList.css'

const CoursesList = (props) => {

    const { announcements } = props;

    return (
        <div className="courses-list section">
            <Row>
                { announcements && announcements.map(announcement => {
                    return (
                        <Col className="gutter-row" xs={12} sm={8} md={8} lg={4} xl={4} xxl={4} key={announcement.id}>
                            <div className="gutter-box">
                                <CourseCard announcement={announcement} />
                            </div>
                        </Col>
                    )
                })}
            </Row>
        </div>
    );
}

export default CoursesList;