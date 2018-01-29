import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../actions';

import AddPhoto from './AddPhoto';
import { Photo } from '../../../components/presentational/portfolio/gallery';

import axios from 'axios';

class Gallery extends Component {
	_loadMore() {
		this.props.fetchPhotos();
	}

	renderPhotos() {
		if(this.props.photos.length>0) {
			return this.props.photos.map((photo) => {
				var uri = decodeURIComponent(photo.uri);
				alert(uri);
				return (
					<img src={JSON.stringify(uri)}></img>
				);
			})
		} else {
			return (
				<div>No Photos</div>
			);
		}
	}

	componentDidMount() {
		this.props.fetchPhotos();
	}

	render() {
		return (
			<div>
				<AddPhoto />
				{this.renderPhotos()}
			</div>
		);
	}

}

function mapStateToProps(state) {
	return { photos: state.photos.photos };
}

export default connect(mapStateToProps, actions)(Gallery);

