import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../actions';

import axios from 'axios';

class AddPhoto extends Component {
	componentDidMount() {
	}

	async _addPhoto(photoUri) {
		var uri = encodeURIComponent(photoUri);
		const res = await axios.post('/api/photos/' + uri);
	}

	_handleSubmit(e) {
		this._addPhoto(this.refs.photoUriInput.value);
	}

	render() {
		return (
			<form onSubmit={this._handleSubmit.bind(this)}>
				<input ref="photoUriInput" type="text" name="photoUri" placeholder="enter photo uri" />
				<button>Add Photo</button>
			</form>
		);
	}
}

function mapStateToProps(state) {
	return { photos: state.photos.photos  };
}

export default connect(mapStateToProps, actions)(AddPhoto);
