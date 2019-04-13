import React from 'react'
import Course from './Course'

const CoursesList = (props) => {

    const { announcements } = props;

    return (
        <div className="courses-list section">
            { announcements && announcements.map(announcement => {
                return (
                    <Course announcement={announcement} key={announcement.id} />
                )
            })}
        </div>
    );
}

export default CoursesList;