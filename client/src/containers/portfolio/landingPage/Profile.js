import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../../../actions';
import styled, { keyframes } from 'styled-components';

import { Container, MainGrid, Header, MenuItem, CtaHeader, Cta, Hero, ValueProp, Cta2, HireMeButton } from '../../../components/presentational/portfolio/profile';

class HeroSection extends Component {
	constructor(props) {
		super();
		this.state = {
			iphoneAnimations: null,
		}
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScrollHero.bind(this));
	}

	handleScrollHero(e) {
		var windowScrollTop = window.scrollY,
	       	    // HERO SECTION VARS
		    hero = window.document.getElementById('#hero'),
		    heroHeight = hero.getBoundingClientRect().height,
		    heroOffset = hero.getBoundingClientRect().top,
		    powerOn=false;

		      // HERO SHOT ANIMATIONS 
		if(windowScrollTop > heroOffset) {
			this.setState({
				iphoneAnimations: 1,
			});
		}		
	}

	render() {
		return (
			<Container>
				<MainGrid>
					<Header>
						<MenuItem>
							<a>Gallery</a>
						</MenuItem>
						<MenuItem>
							<a>Resume</a>
						</MenuItem>
						<MenuItem logo>
							Sky Wilson
						</MenuItem>
					</Header>
					<Hero>
					</Hero>
					<CtaHeader>
						<Cta>Hire Me <HireMeButton>+</HireMeButton></Cta>
					</CtaHeader>

					<Header>
					</Header>
					<Hero>
					</Hero>
					<Cta>
					</Cta>
					
					<ValueProp>
						<div>Designer & Developer</div>
						<div>in Portland, Oregon.</div>
					</ValueProp>
					<Hero>
					</Hero>
					<Cta2>
						<div>See My Work<HireMeButton cta2>+</HireMeButton></div>
					</Cta2>
										
				</MainGrid>
			</Container>
		);
	}
}

function mapStateToProps(state) {
	// destructuring an object as done below, returns an object with a property called state, and that property itself contains the state properties - it does NOT assign an state to an empty object
	return { };
}

export default connect(mapStateToProps, actions)(HeroSection);
