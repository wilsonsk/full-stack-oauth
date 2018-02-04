import React, { Component } from 'react';
import { connect } from 'react-redux';
import MyForm from './form/MyForm';

import * as actions from '../actions';

class Landing extends Component {
	componentWillMount() {
		this.props.fetchPhotos();		
	};
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
		window.addEventListener('click', this.handleClick);
	};
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	};

	handleScroll(e) {
		console.log(e);
	};

	handleClick(e) {
		console.log(e);
	};
		
	render() {
		return (
			<div style={{ display: 'flex', border: 'solid', alignItems: 'center'}}>
					<div style={{ border: 'solid', flex: '1.618', flexDirection: 'column' }}>
						<h1>This is a heroshot</h1>	
					</div>
					<div style={{ display:'flex', border: 'solid', flex: '1', flexDirection: 'column' }}>
						<div style={{ border: 'solid', flex: '1' }}>
							<h1>This is a CTA</h1>	
						</div>
						<MyForm />
					</div>
			</div>
		);
	}
};

function mapStateToProps(state) {
	console.log("mapped state: " + JSON.stringify(state));
	return { photos: state.photos };
}

export default connect(mapStateToProps, actions)(Landing);
