import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../../actions';
import styled, { keyframes } from 'styled-components';

import { Footer, Container, FooterContent, FooterLogo, FooterContentColumnMainRow, FooterContentColumnA, FooterColumnHeadline, FooterPosts, FooterPostItem, FooterContentColumnB, FooterNews, FooterNewsRowItem, FooterContentColumnC, FooterAboutPara, SmallText } from '../../components/presentational/footer';

class FooterSection extends Component {
	constructor(props) {
		super();
		this.state = {
			footerAnimations: null,
		}
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScrollFooter.bind(this));
	}

	handleScrollFooter(e) {
		var windowScrollTop = window.scrollY,
	       	    // HERO SECTION VARS
		    footer = window.document.getElementById('#footer'),
		    footerHeight = footer.getBoundingClientRect().height,
		    footerOffset = footer.getBoundingClientRect().top;

		      // FEATURES SECTION ANIMATIONS 
		if(windowScrollTop > footerHeight/3) {
			this.setState({
				footerAnimations: 1,
			});
		}		

	}

	render() {
		return (
			<Footer id="#footer">
				<Container>
					<FooterContent>
						<FooterLogo animated={this.state.footerAnimations}>
							<img src="https://i.imgur.com/Zqerj8H.png" />
						</FooterLogo>
						<FooterContentColumnMainRow>
							<FooterContentColumnA animated={this.state.footerAnimations}>
								<FooterColumnHeadline>
									Popular Posts
								</FooterColumnHeadline>
								<FooterPosts>
									<FooterPostItem>
										<img src="https://i.imgur.com/FL8Yiet.png" />Love Donut Bonbon Cakes
									</FooterPostItem>
									<FooterPostItem>
										<img src="https://i.imgur.com/FL8Yiet.png" />Candy fruitcake biscuit chupa chups
									</FooterPostItem>
									<FooterPostItem>
										<img src="https://i.imgur.com/FL8Yiet.png" />Candy fruitcake biscuit chupa chups
									</FooterPostItem>
								</FooterPosts>
							</FooterContentColumnA>
							<FooterContentColumnB animated={this.state.footerAnimations}>
								<FooterColumnHeadline>
									News
								</FooterColumnHeadline>
								<FooterNews>
									<FooterNewsRowItem>
										SedLEx <SmallText>10 Hours ago</SmallText>
									</FooterNewsRowItem>
									<div>
										Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									</div>
									<div>	
										Follow Us
									</div>
								</FooterNews>
							</FooterContentColumnB>
							<FooterContentColumnC animated={this.state.footerAnimations}>
								<FooterColumnHeadline>
									About
								</FooterColumnHeadline>
								<FooterAboutPara>
									Cheesecake tiramisu dragée gummies donut cotton candy ice cream I love halvah. Gummies croissant I love gummies gummies. Marshmallow I love gummies sugar plum jelly-o pie. 
								</FooterAboutPara>
							</FooterContentColumnC>
						</FooterContentColumnMainRow>
					</FooterContent>
				</Container>
			</Footer>
		);
	}
}

function mapStateToProps(state) {
	// destructuring an object as done below, returns an object with a property called state, and that property itself contains the state properties - it does NOT assign an state to an empty object
	return { };
}

export default connect(mapStateToProps, actions)(FooterSection);
