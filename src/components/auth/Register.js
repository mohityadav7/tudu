import React, { Component } from 'react';
import { Tabs, Icon } from 'antd';
import { WrappedStudentRegisterForm, WrappedTeacherRegisterForm } from './RegisterForms';
import './Form.css';

const TabPane = Tabs.TabPane;
export class Login extends Component {
    render() {
        return (
        <div className="registerFormContainer">
			<Tabs defaultActiveKey="1">
				<TabPane tab={<span><Icon type="user" />Student</span>} key="1">
					<WrappedStudentRegisterForm />
				</TabPane>
				<TabPane tab={<span><Icon type="user" />Teacher</span>} key="2">
					<WrappedTeacherRegisterForm />
				</TabPane>
			</Tabs>
        </div>
        )
    }
}

export default Login;
