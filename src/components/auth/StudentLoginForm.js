import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';

const formName = 'student_login_form';

class StudentLoginForm extends Component {

    state = {
        email: "",
        password: ""
    }

	handleChange = (e) => {
		this.setState({
			[e.target.id.replace(formName+'_', '')]: e.target.value
		})
	}

    // updateEmail = (e) => {
    //     this.setState({
    //         'email': e.target.value            
    //     })
    // }

    // updatePassword = (e) => {
    //     this.setState({
    //         'password': e.target.value
    //     })
    // }

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
                console.log("Received values of form: ", values);
                this.props.signIn(this.state);
			}
		});
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Form onSubmit={this.handleSubmit} className="student-login-form">
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
                            onChange={this.handleChange}
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
                            onChange={this.handleChange}
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

const WrappedStudentLoginForm = Form.create({ name: formName })(
	StudentLoginForm
);

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WrappedStudentLoginForm);
