import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Tabs, Icon } from 'antd';
import TeacherLoginForm from './TeacherLoginForm';
import StudentLoginForm from './StudentLoginForm';
import './Form.css';
import { connect } from 'react-redux';

const TabPane = Tabs.TabPane;
export class Login extends Component {

    render() {

        const auth = this.props.auth;

        if(auth.uid) {
            return <Redirect to="/dashboard"></Redirect>        }

        return (
        <div className="loginFormContainer">
            <Tabs defaultActiveKey="1">
                <TabPane tab={<span><Icon type="user" />Student</span>} key="1">
                    <StudentLoginForm />
                </TabPane>
                <TabPane tab={<span><Icon type="user" />Teacher</span>} key="2">
                    <TeacherLoginForm />
                </TabPane>
            </Tabs>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Login);
