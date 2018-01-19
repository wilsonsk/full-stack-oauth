import { FETCH_PHOTOS } from '../actions/types';

export default function(state={
	photos: []	
	}, action) {
	switch(action.type) {
		case FETCH_PHOTOS:
			return { 
				...state,
				photos: action.payload || false
			}
		default:
			return state;
	}
};

