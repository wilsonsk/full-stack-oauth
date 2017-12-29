import { combineReducers } from 'redux';
import authReducer from './authReducer';
import photosReducer from './photosReducer';

import formReducer from './formReducer';

export default combineReducers({
	auth: authReducer,
	photos: photosReducer,
});
