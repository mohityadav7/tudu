import React, { Component } from 'react';
import { Tabs, Icon } from 'antd';
import TeacherRegisterForm from './TeacherRegisterForm';
import StudentRegisterForm from './StudentRegisterForm';
import './Form.css';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const TabPane = Tabs.TabPane;
export class Login extends Component {
    render() {

		const { auth } = this.props;
		if(auth.uid) {
			return <Redirect to="/auth/login"></Redirect>
		}

        return (
        <div className="registerFormContainer">
			<Tabs defaultActiveKey="1">
				<TabPane tab={<span><Icon type="user" />Student</span>} key="1">
					<StudentRegisterForm />
				</TabPane>
				<TabPane tab={<span><Icon type="user" />Teacher</span>} key="2">
					<TeacherRegisterForm />
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
