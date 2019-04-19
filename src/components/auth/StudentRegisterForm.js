import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button } from "antd";
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';

const formName = 'student_register_form';

class StudentRegisterForm extends Component {
    state = {
		firstName: "",
		lastName: "",
		// studentId: "",
		email: "",
		password: "",
		isTeacher: false,
		program: "BTech",
		branch: "",
		semester: 0
	};
	
	handleChange = (e) => {
		this.setState({
			[e.target.id.replace(formName+'_', '')]: e.target.value
		})
	}
    
	// updateFirstName = (e) => {
	// 	this.setState({
	// 		firstName: e.target.value
	// 	})
	// }

	// updateLastName = (e) => {
	// 	this.setState({
	// 		lastName: e.target.value
	// 	})
	// }

	// updateStudentId = (e) => {
	// 	this.setState({
	// 		studentId: e.target.value
	// 	})
	// }

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

	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
                this.props.signUp(this.state);
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
                            onChange={this.handleChange}
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
                            onChange={this.handleChange}
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
					{getFieldDecorator("studentId", {
						rules: [
							{
								required: true,
								message: "Please input your Student Id!"
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
							placeholder="Student Id"
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

export const WrappedStudentRegisterForm = Form.create({ name: formName })(
	StudentRegisterForm
);

const mapStateToProps = (state) => {
	return {
        auth: state.firebase.auth,
		authError: state.auth.authError        
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		signUp: (newUser) => dispatch(signUp(newUser))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(WrappedStudentRegisterForm);