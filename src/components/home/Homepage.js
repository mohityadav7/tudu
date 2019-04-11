import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div>
            This is the Homepage.
            Go to <Link to='/dashboard'>Dahboard</Link>
        </div>
    )
}

export default Homepage;
