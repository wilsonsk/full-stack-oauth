import { SET_GRID } from '../actions/types';

export default function(state={
	grid: []	
	}, action) {
	switch(action.type) {
		case SET_GRID:
			var { grid } = state;
			return state = {...state, grid: [...grid, action.payload]}
		default:
			return state;
	}
};

