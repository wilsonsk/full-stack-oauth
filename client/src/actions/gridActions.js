import { SET_GRID } from './types';

export const setGrid = (val) => {
	return {
		type: SET_GRID, 
		payload: val
	}
}
