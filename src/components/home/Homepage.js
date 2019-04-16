import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Homepage = (props) => {

    const { auth } = props;
    
    if(auth.uid) {
        return <Redirect to="/dashboard"></Redirect>
    }

    return (
        <div style={{ padding: '24px' }}>
            This is the Homepage.
            <p><Link to='/dashboard'>Login Now</Link></p>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.firebase.auth,
    }
}

export default connect(mapStateToProps)(withRouter(Homepage));
