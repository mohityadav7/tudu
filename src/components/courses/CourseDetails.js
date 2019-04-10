import React from 'react';

const CourseDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section course-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Course Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, culpa facilis! Mollitia ratione hic excepturi aut dolorum voluptatem harum atque, deleniti, quisquam quis molestiae saepe, ex recusandae commodi quasi quas.</p>
                </div>
                <div className="card-content grey lighten-4 grey-text">
                    <div>Program - BTech</div>
                    <div>IT Department</div>
                </div>
            </div>
        </div>
    )
}

export default CourseDetails;