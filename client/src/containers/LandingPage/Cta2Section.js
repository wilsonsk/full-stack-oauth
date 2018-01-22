import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../../actions';
import styled, { keyframes } from 'styled-components';

import { Cta2, Container, Cta2Content, Cta2Column, Cta2Header, Cta2ParaRedText, Cta2Para, Cta2Button, DogHero } from '../../components/presentational/cta2';

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
		if(windowScrollTop > cta2Offset + cta2Height) {
			this.setState({
				cta2Animations: 1,
			});
		}		

	}

	render() {
		return (
			<Cta2 id="#cta-2">
				<Container>
					<Cta2Content>
						<Cta2Column animated={this.state.cta2Animations}>
							<Cta2Header>
								<Cta2ParaRedText>Chocolate</Cta2ParaRedText> pudding dessert jelly <Cta2ParaRedText>fruit cake tart jelly wafer.</Cta2ParaRedText>
							</Cta2Header>
							<Cta2Para>
								Donut cupcake lemon drops dragée liquorice apple pie powder. Topping sweet lollipop soufflé chocolate liquorice candy canes.
							</Cta2Para>
							<Cta2Button>
								Download
							</Cta2Button>
						</Cta2Column>
						<DogHero>
							          <img src="https://i.imgur.com/Da6cUxG.png" id="dog-hero" />
						</DogHero>
					</Cta2Content>
				</Container>
			</Cta2>
			);
	}
}

function mapStateToProps(state) {
	// destructuring an object as done below, returns an object with a property called state, and that property itself contains the state properties - it does NOT assign an state to an empty object
	return { };
}

export default connect(mapStateToProps, actions)(Cta2Section);
