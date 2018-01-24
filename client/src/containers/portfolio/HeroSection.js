import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../../actions';
import styled, { keyframes } from 'styled-components';

import { Hero, Container, Header, HeaderLogo, NavbarHeaderMenu, NavbarHeaderMenuItem } from '../../components/presentational/portfolio/hero/header';

import { Cta, CtaInfo, CtaHeadline, CtaValueProposition, CtaButton, IphoneIcon, IphoneHeroOff, IphoneHeroOn, IphoneHeroButton, IphoneImage } from '../../components/presentational/portfolio/hero/cta';

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
			<Hero>
				<Container>
					<Header id="#hero">
						<HeaderLogo href="#">
							<img src="https://i.imgur.com/N2L0htY.png" />
						</HeaderLogo>
						<NavbarHeaderMenu>		
							<NavbarHeaderMenuItem>
								<a>Home</a>
							</NavbarHeaderMenuItem>
							<NavbarHeaderMenuItem>
								<a>Features</a>
							</NavbarHeaderMenuItem>
							<NavbarHeaderMenuItem>
								<a>Downloads</a>
							</NavbarHeaderMenuItem>
							<NavbarHeaderMenuItem>
								<a>Blog</a>
							</NavbarHeaderMenuItem>
							<NavbarHeaderMenuItem>
								<a>Contact</a>
							</NavbarHeaderMenuItem>
						</NavbarHeaderMenu>
					</Header>

					<Cta>
						<CtaInfo>
							<CtaHeadline>
								Designer in Portland, Oregon
							</CtaHeadline>
							<CtaValueProposition>
								Visual Design and UX Development.
							</CtaValueProposition>
							<CtaButton>
								<IphoneIcon>
									<img src="https://i.imgur.com/HlXhwuW.png" />
								</IphoneIcon>											
								<div>
									Hire Me!	
								</div>
							</CtaButton>
						</CtaInfo>
						<IphoneImage>
							<IphoneHeroOff id="#iphone-hero-off" animated={this.state.iphoneAnimations}>
								<img src="https://i.imgur.com/sOKU33v.png" />
							</IphoneHeroOff>
							<IphoneHeroButton id="#iphone-hero-button" animated={this.state.iphoneAnimations}>
								<img src="https://i.imgur.com/48ksIm5.png" />
							</IphoneHeroButton>
							<IphoneHeroOn id="#iphone-hero-on" animated={this.state.iphoneAnimations}>
								<img src="https://i.imgur.com/5sjS6pY.png" />
							</IphoneHeroOn>
						</IphoneImage>
					</Cta>
				</Container>
			</Hero>
		);
	}
}

function mapStateToProps(state) {
	// destructuring an object as done below, returns an object with a property called state, and that property itself contains the state properties - it does NOT assign an state to an empty object
	return { };
}

export default connect(mapStateToProps, actions)(HeroSection);
