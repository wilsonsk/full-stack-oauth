import { FETCH_USER } from '../actions/types';
import { ADD_SEND_AMOUNT } from '../actions/types';
import { FETCH_RECIPIENT_AMOUNT } from '../actions/types';

export default function(state={
		sent_amounts: []
	}, action) {
	switch(action.type) {
		case FETCH_USER:
			return action.payload || false;
		case ADD_SEND_AMOUNT:
			return state = {...state, sent_amounts: action.payload};
		case FETCH_RECIPIENT_AMOUNT:
			return state;
		default:
			return state;
	}
};
