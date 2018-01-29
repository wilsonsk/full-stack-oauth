import axios from 'axios';
import { FETCH_PHOTOS } from './types';

// using middleware called 'redux thunk', we are able to call dispatch method from within an action- AND can return a FUNCTION instead of an action - in this case we will delay the dispatching of an action until AFTER (async) a GET request to an API for photos which will then be returned
//
export const fetchPhotos = () => async dispatch => {
	// get photos from state
	const res = await axios.get('/api/photos');
	dispatch({ type: FETCH_PHOTOS, payload: res.data })
}

export const addPhoto = (photoUri) => async dispatch => {
	// get photos from state
	//const res = await axios.post('/api/photos/' + photoUri);
	//dispatch({ type: FETCH_PHOTOS, payload: res.data })
	alert(photoUri);
}
