import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../actions';
import styled, { keyframes } from 'styled-components';

import { Features, FeaturesContent, FeaturesMainHeader, FeaturesMainPara, FeaturesContentRow, FeaturesContentCol, FeaturesContentColA, FeaturesContentColB, FeaturesContentColC, FeaturesContentHeader, FeaturesContentPara  } from '../components/presentational/features';

class FeaturesSection extends Component {
	constructor(props) {
		super();
		this.state = {
			featuresAnimations: null,
		}
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScrollFeatures.bind(this));
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
		);
	}
}

function mapStateToProps(state) {
	// destructuring an object as done below, returns an object with a property called state, and that property itself contains the state properties - it does NOT assign an state to an empty object
	return { };
}

export default connect(mapStateToProps, actions)(FeaturesSection);
