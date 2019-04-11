import React from 'react';
import { Route } from 'react-router-dom';
import { Row, Col } from 'antd';
import Login from './Login';
import Register from './Register';


const Auth = () => {
    return (
    <div>
        <Row>
            <Col xs={1} sm={4} md={6} lg={8} xl={9} xxl={9}></Col>
            <Col xs={22} sm={16} md={12} lg={8} xl={6} xxl={6}>
                <Route path="/auth/login" component={Login} />
                <Route path="/auth/register" component={Register} />
            </Col>
            <Col xs={1} sm={4} md={6} lg={8} xl={9} xxl={9}></Col>
        </Row>

    </div>
)
}

export default Auth;
