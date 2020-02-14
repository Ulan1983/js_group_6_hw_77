import React, {Component, Fragment} from 'react';
import {createMessage, fetchMessages} from "../../store/actions/actions";
import {connect} from "react-redux";
import {Card, CardText} from "reactstrap";
import MessageForm from "../../components/MessageForm/MessageForm";


class MainPage extends Component {
	componentDidMount() {
		this.props.fetchMessages();
	}

	createMessageHandler = async (formData) => {
		await this.props.createMessage(formData);
	};

	render() {
		return (
			<Fragment>
				{this.props.messages.map(message => (
					<Card key={message.id}
						  style={{marginTop: '10px', padding: '10px'}}
					>
						{message.image &&
						<img
							src={'http://localhost:8080/uploads/' + message.image}
							alt='message'
							className='img-thumbnail'
							style={{maxWidth: '120px', maxHeight: '120px'}}
						/>
						}
						<CardText>
							<strong>Author: </strong>{message.author}
						</CardText>
						<CardText>
							<strong>Message: </strong>"{message.message}"
						</CardText>
					</Card>
				))}
				<MessageForm
					onSubmit={this.createMessageHandler}
				/>
			</Fragment>
		)
	}
}

const mapStateToProps = state => ({
	messages: state.messages
});

const mapDispatchToProps = dispatch => ({
	fetchMessages: () => dispatch(fetchMessages()),
	createMessage: messageData => dispatch(createMessage(messageData))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);