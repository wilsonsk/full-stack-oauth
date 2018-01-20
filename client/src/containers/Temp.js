import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../actions';
import styled, { keyframes } from 'styled-components';

import { Hero, Container, Header, HeaderLogo, NavbarHeaderMenu, NavbarHeaderMenuItem } from '../components/presentational/hero/header';

import { Cta, CtaInfo, CtaHeadline, CtaValueProposition, CtaButton, IphoneIcon, IphoneHeroOff, IphoneHeroOn, IphoneHeroButton } from '../components/presentational/hero/cta';

class Temp extends Component {
	constructor(props) {
		super();
		this.state = {
			iphoneAnimations: 0,
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
		    iphoneHeroOn = window.document.getElementById('#iphone-hero-on'),
		    iphoneHeroOff = window.document.getElementById('#iphone-hero-off'),
		    iphoneHeroButton = window.document.getElementById('#iphone-hero-button'),
		    powerOn=false;

		      // HERO SHOT ANIMATIONS 
		if(windowScrollTop > heroOffset) {
			this.setState({
				iphoneAnimations: 1,
			});
		}		
	}

	renderIphoneAnimation() {
		if(this.state.iphoneAnimations){
			return(
				<div style={{position: 'relative'}}>
					<IphoneHeroOff id="#iphone-hero-off" zIndex="" opacity="1" gridRow="1" gridColumn="2" animation1="3s ease-out forwards" animation2="1.5s forwards">
						<img src="https://i.imgur.com/sOKU33v.png" />
					</IphoneHeroOff>
					<IphoneHeroButton id="#iphone-hero-button" marginLeft="72%" width="15%" zIndex="1" gridRow="1" gridColumn="2" opacity="1" animation1="3s ease-out forwards" animation2="1.5s forwards">
						<img src="https://i.imgur.com/48ksIm5.png" />
					</IphoneHeroButton>
					<IphoneHeroOn id="#iphone-hero-on" marginTop="70%" paddingLeft="20%" zIndex="1" gridRow="1" gridColumn="2" animation="3s ease-out 3s backwards" opacity="1">
						<img src="https://i.imgur.com/5sjS6pY.png" />
					</IphoneHeroOn>
				</div>
			);
		} else {
			return (
				<div style={{position: 'relative'}}>
					<IphoneHeroOff id="#iphone-hero-off" opacity="0">
						<img src="https://i.imgur.com/sOKU33v.png" />
					</IphoneHeroOff>
					<IphoneHeroButton id="#iphone-hero-button" opacity="0">
						<img src="https://i.imgur.com/48ksIm5.png" />
					</IphoneHeroButton>
					<IphoneHeroOn id="#iphone-hero-on" opacity="0">
						<img src="https://i.imgur.com/5sjS6pY.png" />
					</IphoneHeroOn>
				</div>
			);
		}
	}

	render() {
		return (
			<Hero>
				<Container>
					<Header id="#hero">
						<HeaderLogo href="#">
							<img src="https://i.imgur.com/Zqerj8H.png" />
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
								Chocolate Passion Cake Modern  Sugar
							</CtaHeadline>
							<CtaValueProposition>
								Fruitcake donut gummies. Candy liquorice biscuit. Sugar plum jelly gummi bears brownie toffee cupcake caramels brownie cookie.
							</CtaValueProposition>
							<CtaButton>
								<IphoneIcon>
									<img src="https://i.imgur.com/HlXhwuW.png" />
								</IphoneIcon>											
								<div>
									Download on appstore
								</div>
							</CtaButton>
						</CtaInfo>
						{this.renderIphoneAnimation()}
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

export default connect(mapStateToProps, actions)(Temp);
