import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../actions';

import Hero from './Hero';
import Features from './Features';

import { Wrapper } from '../../../components/presentational/portfolio/testLanding_1/Landing';


class Landing extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	
	render() {
		return (
			<Wrapper>
				<Hero />
				<Features />
			</Wrapper>
		);
	}
}

export default connect(null, actions)(Landing);
