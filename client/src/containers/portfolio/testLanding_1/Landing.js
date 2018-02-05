import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../actions';

import Hero from './Hero';
import Features from './Features';

class Landing extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	
	render() {
		return (
			<div>
				<Hero />
				<Features />
			</div>
		);
	}
}

export default connect(null, actions)(Landing);
