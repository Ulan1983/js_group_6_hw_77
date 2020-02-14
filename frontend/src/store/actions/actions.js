import axiosApi from "../../axiosApi";

export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS';
export const CREATE_MESSAGE_SUCCESS = 'CREATE_MESSAGE_SUCCESS';

export const fetchMessagesSuccess = messages => ({type: FETCH_MESSAGES_SUCCESS, messages});
export const createMessageSuccess = () => ({type: CREATE_MESSAGE_SUCCESS});

export const fetchMessages = () => {
	return async (dispatch) => {
		try {
			const response = await axiosApi.get('/messages');
			dispatch(fetchMessagesSuccess(response.data));
		} catch (e) {
			console.error('Fetch messages failed', e);
		}
	}
};

export const createMessage = messageData => {
	return async (dispatch) => {
		try {
			await axiosApi.post('/messages', messageData);
			dispatch(createMessageSuccess());
			dispatch(fetchMessages())
		} catch (e) {
			console.error('Creating message failed', e);
		}
	}
};