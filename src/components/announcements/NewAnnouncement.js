import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Button, Form } from 'antd';
import { createAnnouncement } from '../../store/actions/announcementActions';
import { withRouter, Redirect } from 'react-router-dom';

const { TextArea } = Input;

export class NewAnnouncement extends Component {

	state = {
		title: '',
		description: ''
	}

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.createAnnouncement({
			...this.state,
			authorFirstName: this.props.profile.firstName,
			authorLastName: this.props.profile.lastName,
			authorId: this.props.auth.uid,
			createdAt: new Date()
		});
		this.props.history.push('/dashboard')
	}

	render() {

		if(!this.props.isTeacher) {
			return <Redirect to="/dashboard">You are not allowed to add announcements.</Redirect>
		}

		return (
			<div style={{
                backgroundColor: '#ffffff',
                padding: 16,
                margin: 16,
                border: '1px solid #e8e8e8'
            }}>
				<h3>Make new Announcement</h3>
				<Form onSubmit={this.handleSubmit}>
					<Form.Item>
						<Input placeholder="Title" id="title" onChange={this.handleChange} />
					</Form.Item>
					<Form.Item>
						<TextArea rows={6} id="description" placeholder="Description" onChange={this.handleChange} />
					</Form.Item>
					<Form.Item>
						<Button type="primary" htmlType="submit">Make Announcement</Button> 
					</Form.Item>
				</Form>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth,
		profile: state.firebase.profile
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		createAnnouncement: (announcement) => dispatch(createAnnouncement(announcement))
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewAnnouncement));
