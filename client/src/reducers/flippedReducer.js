import { FETCH_FLIPPED } from '../actions/types';
import { SET_FLIPPED } from '../actions/types';

export default function(state={
	flipped: []	
	}, action) {
	switch(action.type) {
		case SET_FLIPPED:
			var { flipped } = state;
			return state = {...state, flipped: [...flipped, action.payload]}
		default:
			return state;
	}
};

