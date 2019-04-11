import React, { Component } from 'react';
import { Tabs, Icon } from 'antd';
import { WrappedStudentLoginForm, WrappedTeacherLoginForm } from './LoginForms';
import './Form.css';

const TabPane = Tabs.TabPane;
export class Login extends Component {
    render() {
        return (
        <div className="loginFormContainer">
            <Tabs defaultActiveKey="1">
                <TabPane tab={<span><Icon type="user" />Student</span>} key="1">
                    <WrappedStudentLoginForm />
                </TabPane>
                <TabPane tab={<span><Icon type="user" />Teacher</span>} key="2">
                    <WrappedTeacherLoginForm />
                </TabPane>
            </Tabs>
        </div>
        )
    }
}

export default Login;
