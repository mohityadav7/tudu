import React, { Component } from "react";
import { Form, Icon, Input, Button } from "antd";
import { connect } from 'react-redux';
import firebase from '../../config/firebaseConfig';
import { sendVerificationCodeForPhoneSignIn } from '../../store/actions/authActions';

class PhoneInputForm extends Component {

    state = {
        phone: "",
        isCodeSent: false
    }

    updatePhone = (e) => {
        this.setState({
            'phone': e.target.value
        })
    }

	handleSubmit = (e) => {
        e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
                console.log("Received values of form: ", values);
                // Send a verification code to the user's phone
                var phoneNumber = this.state.phone;
                var appVerifier = window.recaptchaVerifier;
                this.props.sendVerificationCodeForPhoneSignIn({phone: phoneNumber, appVerifier});
			}
		});
    };

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
            <div className="login-warp">
                <Form onSubmit={this.handleSubmit} className="phone-login-form">
                    <Form.Item>
                        {getFieldDecorator("phone", {
                            rules: [
                                {
                                    required: true,
                                    message: "Please input your registered phone number!"
                                }
                            ]
                        })(
                            <Input
                                onChange={this.updatePhone}
                                className="custom-padding-left"
                                prefix={
                                    <Icon
                                        type="phone"
                                        style={{ color: "rgba(0,0,0,.25)" }}
                                    />
                                }
                                placeholder="+919999999999"
                            />
                        )}
                    </Form.Item>
                    {/* {
                        this.props.authError ? (
                            <p style={{ color: 'red' }}>
                                { this.props.authError }
                            </p>
                        ) : ( null )
                    } */}
                    <Form.Item>
                        <Button
                            id="get-confirmation-code-button"
                            type="default"
                            htmlType="submit"
                            className="login-form-button">
                            Get Confirmation Code
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
    
    componentDidMount(){
        // To apply the default browser preference instead of explicitly setting it.
        firebase.auth().useDeviceLanguage();

        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('get-confirmation-code-button', {
            'size': 'invisible',
            'callback': function(response) {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                // onSignInSubmit();
            }
        });
    }
}

const WrappedPhoneLoginForm = Form.create({ name: "phone_input_form" })(
	PhoneInputForm
);

// const mapStateToProps = (state) => {
//     return {
//         authError: state.auth.authError
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        sendVerificationCodeForPhoneSignIn: (creds) => dispatch(sendVerificationCodeForPhoneSignIn(creds))
    }
}

export default connect(null, mapDispatchToProps)(WrappedPhoneLoginForm);

// export default WrappedPhoneLoginForm;