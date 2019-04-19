import React from 'react'
import CourseCard from './CourseCard'
import {Row, Col} from 'antd'
import './CourseList.css'

const CoursesList = (props) => {

    const { courses } = props;

    return (
        <div className="courses-list section">
            <Row>
                { courses && courses[0]['sem6'].map(course => {
                    return (
                        <Col className="gutter-row" xs={12} sm={8} md={8} lg={4} xl={4} xxl={4} key={course.code}>
                            <div className="gutter-box">
                                <CourseCard course={course} />
                            </div>
                        </Col>
                    )
                })}
            </Row>
        </div>
    );
}

export default CoursesList;