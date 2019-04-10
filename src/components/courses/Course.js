import React from 'react';
import { Card } from 'antd';

const Course = () => {
    return (
        < Card 
            size="small"
            title="Course Title"
            style={{ width: '100%', margin: '12px 0' }}
        >
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto cupiditate magni sunt magnam nesciunt. Rem vitae harum blanditiis distinctio accusantium autem velit impedit expedita aliquid, laudantium ducimus omnis odio officiis.</p>
            <p className="grey-text">Posted by Mohit <br/>
                on 5th April, 2019</p>
            {/* <div className="card course">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title course-title">Course Title</span>
                    <p>Posted by Mohit</p>
                    <p className="grey-text">5th April, 2019</p>
                </div>
            </div> */}
        </ Card>
    )
}

export default Course;