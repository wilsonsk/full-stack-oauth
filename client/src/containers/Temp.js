import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../actions';
import styled, { keyframes } from 'styled-components';

import { Hero, Container, Header, HeaderLogo, NavbarHeaderMenu, NavbarHeaderMenuItem } from '../components/presentational/hero/header';

import { Cta, CtaInfo, CtaHeadline, CtaValueProposition, CtaButton, IphoneIcon, IphoneHeroOff, IphoneHeroOn, IphoneHeroButton } from '../components/presentational/hero/cta';

import { Features, FeaturesContent, FeaturesMainHeader, FeaturesMainPara, FeaturesContentRow, FeaturesContentCol, FeaturesContentColA, FeaturesContentColB, FeaturesContentColC, FeaturesContentHeader, FeaturesContentPara  } from '../components/presentational/hero/features';

class Temp extends Component {
	constructor(props) {
		super();
		this.state = {
			iphoneAnimations: null,
			featuresAnimations: null,
		}
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScrollHero.bind(this));
		window.addEventListener('scroll', this.handleScrollFeatures.bind(this));
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

	handleScrollFeatures(e) {
		var windowScrollTop = window.scrollY,
	       	    // HERO SECTION VARS
		    features = window.document.getElementById('#features'),
		    featuresHeight = features.getBoundingClientRect().height,
		    featuresOffset = features.getBoundingClientRect().top;

		      // FEATURES SECTION ANIMATIONS 
		if(windowScrollTop > featuresOffset) {
			this.setState({
				featuresAnimations: 1,
			});
		}		

	}

	render() {
		return (
			<div>
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
							<IphoneHeroOff id="#iphone-hero-off" animated={this.state.iphoneAnimations}>
								<img src="https://i.imgur.com/sOKU33v.png" />
							</IphoneHeroOff>
							<IphoneHeroButton id="#iphone-hero-button" animated={this.state.iphoneAnimations}>
								<img src="https://i.imgur.com/48ksIm5.png" />
							</IphoneHeroButton>
							<IphoneHeroOn id="#iphone-hero-on" animated={this.state.iphoneAnimations}>
								<img src="https://i.imgur.com/5sjS6pY.png" />
							</IphoneHeroOn>

						</Cta>
					</Container>
				</Hero>

				<Features id="#features">
					<FeaturesContent>
						<FeaturesMainHeader>
							App Features
						</FeaturesMainHeader>
						<FeaturesMainPara>
							Donut sesame snaps donut pie dessert chupa chups wafer dragée. Gummies fruitcake chupa chups cookie liquorice. Chocolate pudding dessert jelly fruitcake tart jelly wafer. Sweet roll carrot cake croissant.			
						</FeaturesMainPara>
						<FeaturesContentRow>
							<FeaturesContentCol>	
								<FeaturesContentColA id="#features-content-col-a" animated={this.state.featuresAnimations}>
									<img src="https://i.imgur.com/fCDgzsd.png" id="feature-img-1"/>	
									<FeaturesContentHeader>
										Scalable
									</FeaturesContentHeader>
									<FeaturesContentPara>
										Croissant ice cream macaroon cake. Dessert jelly beans candy cookie. Bear claw candy canes gingerbread caramels cake. Macaroon applicake gummi bears jelly marzipan.
									</FeaturesContentPara>
								</FeaturesContentColA>
							</FeaturesContentCol>	
							<FeaturesContentCol>	
								<FeaturesContentColB id="#features-content-col-b" animated={this.state.featuresAnimations}>
									<img src="https://i.imgur.com/OjjiYfy.png" id="feature-img-2" />
									<FeaturesContentHeader>
										Instant
									</FeaturesContentHeader>
									<FeaturesContentPara>
										Croissant ice cream macaroon cake. Dessert jelly beans candy cookie. Bear claw candy canes gingerbread caramels cake. Macaroon applicake gummi bears jelly marzipan.
									</FeaturesContentPara>
								</FeaturesContentColB>
							</FeaturesContentCol>	
							<FeaturesContentCol>	
								<FeaturesContentColC id="#features-content-col-c" animated={this.state.featuresAnimations}>
									<img src="https://i.imgur.com/7lnBcrt.png" id="feature-img-3" />
									<FeaturesContentHeader>
										Something
									</FeaturesContentHeader>
									<FeaturesContentPara>
										Croissant ice cream macaroon cake. Dessert jelly beans candy cookie. Bear claw candy canes gingerbread caramels cake. Macaroon applicake gummi bears jelly marzipan.
									</FeaturesContentPara>
								</FeaturesContentColC>
							</FeaturesContentCol>	
						</FeaturesContentRow>
					</FeaturesContent>
				</Features>
			</div>	
		);
	}
}

function mapStateToProps(state) {
	// destructuring an object as done below, returns an object with a property called state, and that property itself contains the state properties - it does NOT assign an state to an empty object
	return { };
}

export default connect(mapStateToProps, actions)(Temp);
