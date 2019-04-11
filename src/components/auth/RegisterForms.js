import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button } from "antd";

class StudentRegisterForm extends Component {
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
			<Form onSubmit={this.handleSubmit} className="student-register-form">
            <Form.Item>
					{getFieldDecorator("firstName", {
						rules: [
							{
								required: true,
								message: "Please input your First Name!"
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
							placeholder="First Name"
						/>
					)}
				</Form.Item>
                <Form.Item>
					{getFieldDecorator("lastName", {
						rules: [
							{
								required: false,
								message: "Please input your Last Name!"
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
							placeholder="Last Name"
						/>
					)}
				</Form.Item>
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
					{getFieldDecorator("email", {
						rules: [
							{
								required: true,
								message: "Please input your email!"
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
							placeholder="Email"
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
					<Button
						type="primary"
						htmlType="submit"
						className="register-form-button">
						Register
					</Button>
                    Or <Link to="/auth/login">login now!</Link>
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

class TeacherRegisterForm extends Component {
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
		console.log(this.props.form);
		return (
			<Form onSubmit={this.handleSubmit} className="teacher-register-form">
            <Form.Item>
					{getFieldDecorator("firstName", {
						rules: [
							{
								required: true,
								message: "Please input your First Name!"
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
							placeholder="First Name"
						/>
					)}
				</Form.Item>
                <Form.Item>
					{getFieldDecorator("lastName", {
						rules: [
							{
								required: false,
								message: "Please input your Last Name!"
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
							placeholder="Last Name"
						/>
					)}
				</Form.Item>
				<Form.Item>
					{getFieldDecorator("teacherId", {
						rules: [
							{
								required: true,
								message: "Please input your Teacher Id!"
							}
						]
					})(
						<Input id="teacherId"
							className="custom-padding-left"
							prefix={
								<Icon
									type="user"
									style={{ color: "rgba(0,0,0,.25)" }}
								/>
							}
							placeholder="Teacher Id"
						/>
					)}
				</Form.Item>
				<Form.Item>
					{getFieldDecorator("email", {
						rules: [
							{
								required: true,
								message: "Please input your email!"
							}
						]
					})(
						<Input id="email"
							className="custom-padding-left"
							prefix={
								<Icon
									type="user"
									style={{ color: "rgba(0,0,0,.25)" }}
								/>
							}
							placeholder="Email"
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
					<Button
						type="primary"
						htmlType="submit"
						className="register-form-button">
						Register
					</Button>
                    Or <Link to="/auth/login">login now!</Link>
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

export const WrappedTeacherRegisterForm = Form.create({ name: "teacher_register_form" })(
	TeacherRegisterForm
);

export const WrappedStudentRegisterForm = Form.create({ name: "student_register_form" })(
	StudentRegisterForm
);
