import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
	// redux-thunk: purpose is to inspect whatever value is returned from this action creator -- if function is returned (as opposed to normal action), then redux thunk will automatiically call the returned function and pass in the dispatch function as an argument where the action is forwarded off to all reducers
	dispatch({ type: FETCH_USER, payload: await axios.get('/api/current_user'});
}

