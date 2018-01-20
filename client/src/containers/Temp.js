import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../actions';
import styled, { keyframes } from 'styled-components';

import { Hero, Container } from '../components/presentational';

class Temp extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<Hero>
				<Container>
					HI WORLD
				</Container>
			</Hero>
		);
	}
}

function mapStateToProps(state) {
	// destructuring an object as done below, returns an object with a property called state, and that property itself contains the state properties - it does NOT assign an state to an empty object
	return { state: state };
}

export default connect(mapStateToProps, actions)(Temp);
