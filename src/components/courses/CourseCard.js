import React from 'react';
import { Link } from 'react-router-dom';
import './CourseCard.css';

const Course = ({announcement}) => {
    return (
        <Link to={`/dashboard/courses/${announcement.id}`}>
            <div className="course-card-body">
                <b>{ announcement.title.substring(0,40) }</b>
            </div>
        </Link>
    )
}

export default Course;