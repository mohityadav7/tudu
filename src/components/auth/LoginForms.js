import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from "antd";

class StudentLoginForm extends Component {
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log("Received values of form: ", values);
			}
		});
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Form onSubmit={this.handleSubmit} className="student-login-form">
				<Form.Item>
					{getFieldDecorator("studentId", {
						rules: [
							{
								required: true,
								message: "Please input your Student Id!"
							}
						]
					})(
						<Input
							className="custom-padding-left"
							prefix={
								<Icon
									type="user"
									style={{ color: "rgba(0,0,0,.25)" }}
								/>
							}
							placeholder="Student Id"
						/>
					)}
				</Form.Item>
				<Form.Item>
					{getFieldDecorator("password", {
						rules: [
							{
								required: true,
								message: "Please input your Password!"
							},
							{
								max: 128,
								message: "Password length can't be more than 128!"
							},
							{
								min: 8,
								message: "Password must contain at least 8 characters!"
							}
						]
					})(
						<Input
							className="custom-padding-left"
							prefix={
								<Icon
									type="lock"
									style={{ color: "rgba(0,0,0,.25)" }}
								/>
							}
							type="password"
							placeholder="Password"
						/>
					)}
				</Form.Item>
				<Form.Item>
					{getFieldDecorator("remember", {
						valuePropName: "checked",
						initialValue: true
					})(<Checkbox>Remember me</Checkbox>)}
					<a
						className="login-form-forgot"
						href="/auth/forgotPassword">
						Forgot password
					</a>
					<Button
						type="primary"
						htmlType="submit"
						className="login-form-button">
						Log in
					</Button>
					Or <Link to="/auth/register">register now!</Link>
					<Link to="/">
                        <Button
                            type="default"
                            htmlType="submit"
                            className="register-form-button">
                            Go Back
                        </Button>
                    </Link>
				</Form.Item>
			</Form>
		);
	}
}

class TeacherLoginForm extends Component {
	state = {
		email: "",
		password: ""
	};

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log("Received values of form: ", values);
			}
		});
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Form onSubmit={this.handleSubmit} className="teacher-login-form">
				<Form.Item>
					{getFieldDecorator("studentId", {
						rules: [
							{
								required: true,
								message: "Please input your username!"
							}
						]
					})(
						<Input id="username"
							className="custom-padding-left"
							prefix={
								<Icon
									type="user"
									style={{ color: "rgba(0,0,0,.25)" }}
								/>
							}
							placeholder="Username"
						/>
					)}
				</Form.Item>
				<Form.Item>
					{getFieldDecorator("password", {
						rules: [
							{
								required: true,
								message: "Please input your Password!"
							}
						]
					})(
						<Input
							className="custom-padding-left"
							prefix={
								<Icon
									type="lock"
									style={{ color: "rgba(0,0,0,.25)" }}
								/>
							}
							type="password"
							placeholder="Password"
						/>
					)}
				</Form.Item>
				<Form.Item>
					{getFieldDecorator("remember", {
						valuePropName: "checked",
						initialValue: true
					})(<Checkbox>Remember me</Checkbox>)}
					<a
						className="login-form-forgot"
						href="/auth/forgotPassword">
						Forgot password
					</a>
					<Button
						type="primary"
						htmlType="submit"
						className="login-form-button">
						Login
					</Button>
					Or <Link to="/auth/register">register now!</Link>
					<Link to="/">
                        <Button
                            type="default"
                            htmlType="submit"
                            className="register-form-button">
                            Go Back
                        </Button>
                    </Link>
				</Form.Item>
			</Form>
		);
	}
}

export const WrappedTeacherLoginForm = Form.create({ name: "teacher_login_form" })(
	TeacherLoginForm
);

export const WrappedStudentLoginForm = Form.create({ name: "student_login_form" })(
	StudentLoginForm
);
