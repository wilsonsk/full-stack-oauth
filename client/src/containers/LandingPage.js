import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

import Hero from './Hero';

class LandingPage extends Component {

	render() {
		return (
			<Hero />
		);
	}
}

function mapStateToProps(state) {
	// destructuring an object as done below, returns an object with a property called state, and that property itself contains the state properties - it does NOT assign an state to an empty object
	return { state };
}

export default connect(mapStateToProps, actions)(LandingPage);
