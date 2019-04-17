import React from 'react';
import { Row, Col, Button } from 'antd';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './Homepage.css';
import landingImg from './landing.png'

const Homepage = (props) => {

    const { auth } = props;
    
    if(auth.uid) {
        return <Redirect to="/dashboard"></Redirect>
    }

    return (
        <div>
            <div style={{ height: '10vh', clear: 'both', backgroundColor: '#e0e0e0', lineHeight: '10vh' }}>
                <h1 style={{ color: '#49a8de', textAlign: 'center' }}>TUDU</h1>
            </div>
            <div className="homepage">
                <Row>
                    <Col xs={24} sm={24} md={14} lg={14} xl={14} xxl={14}>
                        <div className="landingImgContainer"></div>
                    </Col>
                    <Col xs={24} sm={24} md={10} lg={10} xl={10} xxl={10}>
                        <div className="text-content-container">
                        <div className="text-content">
                            <p style={{ color: '#777' }}>
                                <h1 style={{ color: '#555' }}>Get Started</h1>
                                Never miss any assignment, any change in schedule, or anything else with TUDU.
                            </p>
                            <Link to='/dashboard'>
                                <Button
                                    type="primary">
                                    Log in
                                </Button>
                            </Link>
                        </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.firebase.auth,
    }
}

export default connect(mapStateToProps)(withRouter(Homepage));
