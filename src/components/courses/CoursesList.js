import React from 'react'
import CourseCard from './CourseCard'
import {Row, Col} from 'antd'
import './CourseList.css'

const CoursesList = (props) => {

    const { courses } = props;
    const style={
        padding: '20px 14px',
        border: '1px solid #e8e8e8',
        backgroundColor: '#ffffff',
    }

    return (
        <div style={style} className="courses-list section">
            <Row>
                { courses && courses[0]['sem6'].map(course => {
                    return (
                        <Col className="gutter-row" xs={24} sm={24} md={8} lg={4} xl={4} xxl={4} key={course.code}>
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