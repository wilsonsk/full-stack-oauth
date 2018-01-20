import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../actions';
import styled, { keyframes } from 'styled-components';

import { Hero, Container, Header, HeaderLogo, NavbarHeaderMenu, NavbarHeaderMenuItem } from '../components/presentational/hero/header';

import { Cta, CtaInfo, CtaHeadline, CtaValueProposition, CtaButton, IphoneButton, IphoneIcon, IphoneHeroOff, IphoneHeroOn, IphoneHeroButton } from '../components/presentational/hero/cta';

class Temp extends Component {
	constructor(props) {
		super();
		this.state = {
			iphoneAnimations: 1,
		}
	}

	renderIphoneAnimation() {
		if(this.state.iphoneAnimations){
			return(
				<div>
					<IphoneHeroOff iphoneOn_animation={this.state.iphoneOn_animation}>
						<img src="https://i.imgur.com/sOKU33v.png" />
					</IphoneHeroOff>
					<IphoneHeroOn marginTop="23%" paddingRight="20%" paddingLeft="16%" zIndex="1" gridRow="1" gridColumn="2" animation="${iphoneOn} 3s ease-out 3s backwards">
						<img src="https://i.imgur.com/5sjS6pY.png" />
					</IphoneHeroOn>
					<IphoneHeroButton iphoneButton_animation={this.state.iphoneButton_animation}>
						<img src="https://i.imgur.com/48ksIm5.png" />
					</IphoneHeroButton>
				</div>
			);
		} else {
			return(
				<div>
					<IphoneHeroOff>
						<img src="https://i.imgur.com/sOKU33v.png" />
					</IphoneHeroOff>
					<IphoneHeroOn>
						<img src="https://i.imgur.com/5sjS6pY.png" />
					</IphoneHeroOn>
					<IphoneHeroButton>
						<img src="https://i.imgur.com/48ksIm5.png" />
					</IphoneHeroButton>
				</div>
			);

		}
	}

	render() {
		return (
			<Hero>
				<Container>
					<Header>
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
										Download on appstore
								</IphoneIcon>
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
