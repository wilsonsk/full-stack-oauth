import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../actions';
import styled, { keyframes } from 'styled-components';

import { Hero, Container, Header, HeaderLogo, NavbarHeaderMenu, NavbarHeaderMenuItem } from '../components/presentational/hero/header';

import { CTA } from '../components/presentational/hero/cta';

class Temp extends Component {
	constructor() {
		super();
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

							</CtaHeadline>
							<CtaValueProposition>

							</CtaValueProposition>
							<CtaButton>
								<IphoneIcon>
									<img src="https://i.imgur.com/HlXhwuW.png" style={styles.iphoneIcon} />
										Download on appstore
								</IphoneIcon>
							</CtaButton>

						</CtaInfo>
						<IphoneHeroOff src="https://i.imgur.com/sOKU33v.png">
						</IphoneHeroOff>
						<IphoneHeroOn src="https://i.imgur.com/48ksIm5.png">
						</IphoneHeroOn>
						<IphoneHeroButton src="https://i.imgur.com/5sjS6pY.png">
						</IphoneHeroButton>
					</Cta>

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
