import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../actions';
import styled, { keyframes } from 'styled-components';

class Cta2Section extends Component {
	constructor(props) {
		super();
		this.state = {
			cta2Animations: null,
		}
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScrollCta2.bind(this));
	}

	handleScrollCta2(e) {
		var windowScrollTop = window.scrollY,
	       	    // HERO SECTION VARS
		    cta2 = window.document.getElementById('#cta-2'),
		    cta2Height = cta2.getBoundingClientRect().height,
		    cta2Offset = cta2.getBoundingClientRect().top;

		      // FEATURES SECTION ANIMATIONS 
		if(windowScrollTop > cta2Offset) {
			this.setState({
				cta2Animations: 1,
			});
		}		

	}

	render() {
		return (
			<div>
			</div>
			);
	}
}

function mapStateToProps(state) {
	// destructuring an object as done below, returns an object with a property called state, and that property itself contains the state properties - it does NOT assign an state to an empty object
	return { };
}

export default connect(mapStateToProps, actions)(Cta2Section);
