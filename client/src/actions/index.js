import { ADD_SEND_AMOUNT } from './types';
import { FETCH_RECIPIENT_AMOUNT } from './types';

export * from './fetchPhotosAction';
export * from './fetchUserAction';
export * from './handleTokenAction';
export * from './flippedActions';
export * from './ctaTransformActions';
export * from './gridActions';

export const addSendAmount = (amount) => {
	console.log(amount);
	return {
		type: ADD_SEND_AMOUNT,
		payload: amount
	}
}

export const fetchRecipientAmount = (amount) => {
	console.log(amount);
	return {
		type: FETCH_RECIPIENT_AMOUNT,
		payload: amount
	}
}
