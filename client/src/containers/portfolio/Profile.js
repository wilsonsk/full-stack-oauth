import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../../actions';
import styled, { keyframes } from 'styled-components';

import { Container, MainGrid, Header, Logo, Menu, Cta, Hero, ValueProp, Cta2 } from '../../components/presentational/portfolio/profile';

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
						<div>
							<Logo src="https://i.imgur.com/WdC6ty8.png" />
						</div>
						<Menu>
							<div>Home </div>
							<div>Features </div>
							<div>Blog </div>
							<div>Download </div>
						</Menu>
					</Header>
					<Hero>
					</Hero>
					<Cta>
					</Cta>

					<Header>
					</Header>
					<Hero>
					</Hero>
					<Cta>
					</Cta>
					
					<ValueProp>
					</ValueProp>
					<Hero>
					</Hero>
					<Cta2>
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
