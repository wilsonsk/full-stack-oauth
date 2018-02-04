import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../actions';

import Hero from './Hero';

class Landing extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	
	render() {
		return (
			<Hero />
		);
	}
}

export default connect(null, actions)(Landing);
