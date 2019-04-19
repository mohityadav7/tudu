import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import './CourseCard.css';

const Course = ({course}) => {
    return (
        <Link to={`/dashboard/courses/it/${course.code}`}>
            <Card 
                size="small"
                title={ course.short + ' (' + course.code + '}' }
                style={{ }}
            >
                <p>{ course.title }</p>
            </Card>
        </Link>
    )
}

export default Course;