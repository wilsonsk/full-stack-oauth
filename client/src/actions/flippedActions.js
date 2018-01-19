import { SET_FLIPPED } from './types';

export const setFlipped = (val) => {
	return {
		type: SET_FLIPPED, 
		payload: val
	}
}
