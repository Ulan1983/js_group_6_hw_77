import React, {Component} from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";

class MessageForm extends Component {
	state = {
		author: '',
		message: '',
		image: null
	};

	valueChanged = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	fileChanged = event => {
		this.setState({
			[event.target.name]: event.target.files[0]
		})
	};

	submitHandler = event => {
		event.preventDefault();

		const formData = new FormData();

		Object.keys(this.state).forEach(key => {
			if (this.state[key]) {
				formData.append(key, this.state[key]);
			}
		});

		this.props.onSubmit(formData)
	};

	render() {
		return (
			<Form onSubmit={this.submitHandler}
				  style={{marginTop: '50px'}}
			>
				<FormGroup row>
					<Label for="author" sm={2}>Author</Label>
					<Col sm={10}>
						<Input type="text"
							   name="author"
							   id="author"
							   placeholder="Enter author"
							   value={this.state.author}
							   onChange={this.valueChanged}
						/>
					</Col>
				</FormGroup>
				<FormGroup row>
					<Label for="message" sm={2}>Message</Label>
					<Col sm={10}>
						<Input type="text"
							   name="message"
							   id="message"
							   placeholder="Enter message"
							   value={this.state.message}
							   onChange={this.valueChanged}
							   required
						/>
					</Col>
				</FormGroup>
				<FormGroup row>
					<Label for="image" sm={2}>Image</Label>
					<Col sm={10}>
						<Input type="file"
							   name="image"
							   id="image"
							   onChange={this.fileChanged}
						/>
					</Col>
				</FormGroup>
				<FormGroup row>
					<Col sm={{size: 10, offset: 2}}>
						<Button color="primary" type='submit'>Send</Button>
					</Col>
				</FormGroup>
			</Form>
		);
	}
}

export default MessageForm;