import { SET_CTA_TRANSFORM } from './types';

export const setCtaTransform = (val) => {
	return {
		type: SET_CTA_TRANSFORM, 
		payload: val
	}
}
