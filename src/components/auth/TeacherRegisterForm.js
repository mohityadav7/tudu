import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button } from "antd";
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';

class TeacherRegisterForm extends Component {
	state = {
		firstName: "",
		lastName: "",
		// teacherId: "",
		email: "",
		password: "",
	};

	updateFirstName = (e) => {
		this.setState({
			firstName: e.target.value
		})
	}

	updateLastName = (e) => {
		this.setState({
			lastName: e.target.value
		})
	}

	updateTeacherId = (e) => {
		this.setState({
			teacherId: e.target.value
		})
	}

	updateEmail = (e) => {
        this.setState({
            'email': e.target.value            
        })
    }

    updatePassword = (e) => {
        this.setState({
            'password': e.target.value
        })
    }

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
                this.props.signUp(this.state);
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
							onChange={this.updateFirstName}
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
							onChange={this.updateLastName}
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
				{/* <Form.Item>
					{getFieldDecorator("teacherId", {
						rules: [
							{
								required: true,
								message: "Please input your Teacher Id!"
							}
						]
					})(
						<Input
                            onChange={this.updateTeacherId}
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
				</Form.Item> */}
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
							onChange={this.updateEmail}
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
							onChange={this.updatePassword}
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
				{
                    this.props.authError ? (
                        <p style={{ color: 'red' }}>
                            { this.props.authError }
                        </p>
                    ) : ( null )
                }
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

const WrappedTeacherRegisterForm = Form.create({ name: "teacher_register_form" })(
	TeacherRegisterForm
);

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth,
		authError: state.auth.authError
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		signUp: (newUser) => dispatch(signUp(newUser)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(WrappedTeacherRegisterForm);
