import { SET_CTA_TRANSFORM } from '../actions/types';

export default function(state={
	ctaTransform: []	
	}, action) {
	switch(action.type) {
		case SET_CTA_TRANSFORM:
			var { ctaTransform } = state;
			return state = {...state, ctaTransform: [...ctaTransform, action.payload]}
		default:
			return state;
	}
};

