import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { connect } from 'react-redux';
import { verifyVerificationCodeForPhoneSignIn } from '../../store/actions/authActions';

class StudentLoginForm extends Component {

    state = {
        confirmationCode: ""
    }

    updateConfirmationCode = (e) => {
        this.setState({
            confirmationCode: e.target.value
        })
    }

	handleSubmit = (e) => {
        e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
                console.log("Received values of form: ", values);

                var code = this.state.confirmationCode;
                this.props.verifyVerificationCodeForPhoneSignIn(code);
			}
		});
    };

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
            <div className="login-wrap">
                <Form onSubmit={this.handleSubmit} className="phone-login-form">
                    {/* {
                        this.props.authError ? (
                            <p style={{ color: 'red' }}>
                                { this.props.authError }
                            </p>
                        ) : ( null )
                    } */}
                    <Form.Item>
                        {getFieldDecorator("confirmationCode", {
                            rules: [
                                {
                                    required: true,
                                    message: "Please input the confirmation code you recieved on your phone number!"
                                }
                            ]
                        })(
                            <Input
                                style={{ display: '' }}
                                onChange={this.updateConfirmationCode}
                                className="custom-padding-left"
                                prefix={
                                    <Icon
                                        type="code"
                                        style={{ color: "rgba(0,0,0,.25)" }}
                                    />
                                }
                                placeholder="123456"
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator("remember", {
                            valuePropName: "checked",
                            initialValue: true
                        })(<Checkbox>Remember me</Checkbox>)}

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
            </div>
        );
    }
}

const WrappedStudentLoginForm = Form.create({ name: "phone_login_form" })(
	StudentLoginForm
);

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        verifyVerificationCodeForPhoneSignIn: (code) => dispatch(verifyVerificationCodeForPhoneSignIn(code))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WrappedStudentLoginForm);
