import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Input, Button, Form } from 'antd';
import { createAnnouncement } from '../../store/actions/announcementActions';
import { withRouter } from 'react-router-dom';

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
		this.props.createAnnouncement(this.state);
	}

	render() {
		return (
			<Fragment>
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
			</Fragment>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		createAnnouncement: (announcement) => dispatch(createAnnouncement(announcement))
	}
}

export default withRouter(connect(null, mapDispatchToProps)(NewAnnouncement));
