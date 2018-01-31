import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../actions';

import AddPhoto from './AddPhoto';
import { Container, PhotoGrid, Photo } from '../../../components/presentational/portfolio/gallery';

import axios from 'axios';
import MasonryInfiniteScroller from 'react-masonry-infinite';

class Gallery extends Component {
	constructor() {
		super();
		this.state = {
			index: 0,
			photos: [],
			hasMore: true,
		}
	}

	componentDidMount() {
		this.props.fetchPhotos();
	}

	_loadMore() {
		if(this.props.photos[this.state.index]) {
			this.setState({
				photos: [...this.state.photos, this.props.photos[this.state.index]],
			});
			if(!this.props.photos[this.state.index+1]) {
				this.setState({
					hasMore: false
				});
			} else {
				this.setState({
					index: this.state.index+1
				});
			}
		}
	}

	renderPhotos() {
		return this.state.photos.map((photo) => {
			var uri = decodeURIComponent(photo.uri);
			return (
				<Photo key={uri} src={uri}></Photo>
			);
		})
	}

	render() {
		return (
			<Container>
				<AddPhoto />
				<MasonryInfiniteScroller
					hasMore={this.state.hasMore}
					loadMore={this._loadMore.bind(this)}
					loader={<h3>Loading...</h3>}
					container={this.galleryContainer}
					sizes={[
						{ mq: '320px', columns: 1, gutter: 0 }, 
						{ mq: '375px', columns: 1, gutter: 0 }, 
						{ mq: '768px', columns: 2, gutter: 5 }, 
						{ mq: '1024px', columns: 3, gutter: 10 },
						{ mq: '1500px', columns: 4, gutter: 10 },
						{ mq: '1900px', columns: 4, gutter: 10 },
					]}
				>
					{
						this.renderPhotos()
					}
				</MasonryInfiniteScroller>
			</Container>
		);
	}

}

function mapStateToProps(state) {
	return { photos: state.photos.photos };
}

export default connect(mapStateToProps, actions)(Gallery);

