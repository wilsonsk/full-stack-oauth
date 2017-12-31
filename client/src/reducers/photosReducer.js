import { FETCH_PHOTOS } from '../actions/types';
import { ADD_PHOTO } from '../actions/types';

export default function(state={
		photos: []
	}, action) {
	switch(action.type) {
		case FETCH_PHOTOS:
			//return state = {photos: action.payload || false};
			return state = action.payload || false
		case ADD_PHOTO:
			return state = {...state, photos: action.payload}
		default:
			return state;
	}
};

