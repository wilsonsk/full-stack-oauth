import { combineReducers } from 'redux';
import authReducer from './authReducer';
import photosReducer from './photosReducer';
import flippedReducer from './flippedReducer';
import ctaTransformReducer from './ctaTransformReducer';

import formReducer from './formReducer';

export default combineReducers({
	auth: authReducer,
	photos: photosReducer,
	flipped: flippedReducer,
	ctaTransform: ctaTransformReducer,
});
