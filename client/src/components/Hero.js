import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Radium from 'radium';


import * as actions from '../actions';

class Hero extends Component {
	constructor() {
		super();
		this.state = {
			iphoneHeroOn: styles.iphoneHeroOn,
			iphoneHeroOff: styles.iphoneHeroOff,
			iphoneHeroButton: styles.iphoneHeroButton,
		};
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
				iphoneHeroOn: styles.iphoneHeroOn_animated,
				iphoneHeroOff: styles.iphoneHeroOff_animated,
				iphoneHeroButton: styles.iphoneHeroButton_animated,
			});
		}
	}

	// Test
	CTAclickHandler() { 
		var { flipped  } = this.props.flipped,
		    flippedIndex = flipped.length-1,
		    { ctaTransform } = this.props.ctaTransform,
		    ctaTransformIndex = ctaTransform.length-1;

		if(!flipped[flippedIndex]) {
			this.props.setFlipped(1);
			this.props.setCtaTransform('rotate(180deg)');
		} else { 
			this.props.setFlipped(0);
			this.props.setCtaTransform('rotate(0deg)');
		}
		alert(JSON.stringify("flipped: " + flipped));
		alert(JSON.stringify("ctaTransform: " + ctaTransform[ctaTransformIndex]));
	}

	render() {
		var { ctaTransform } = this.props.ctaTransform,
		    ctaTransformIndex = ctaTransform.length-1;

		return (
			<div>
				<section style={styles.hero} id={"#hero"}>
					<div style={styles.container}>
						
						<div style={styles.header} classname={"container"}>
							<a style={styles.headerLogo} id={"#nav-logo"} href="#"><img style={styles.headerLogoImg} src="https://i.imgur.com/Zqerj8H.png" /></a>
							<ul id={"#navbar-header-menu"}style={styles.navbarHeaderMenu}>
								<li style={styles.navbarHeaderMenuItem}><a style={styles.navbarHeaderMenuItemLink} href="#">Home</a></li>
								<li style={styles.navbarHeaderMenuItem}><a key="features" style={styles.navbarHeaderMenuItemLink} href="#">Features</a></li>
								<li style={styles.navbarHeaderMenuItem}><a key="download" style={styles.navbarHeaderMenuItemLink} href="#">Download</a></li>
								<li style={styles.navbarHeaderMenuItem}><a key="blog" style={styles.navbarHeaderMenuItemLink} href="#">Blog</a></li>
								<li style={styles.navbarHeaderMenuItem}><a key="contact" style={styles.navbarHeaderMenuItemLink} href="#">Contact</a></li>
							</ul>		
						</div>
						
						<div onClick={this.CTAclickHandler.bind(this)} style={{transform: ctaTransform[ctaTransformIndex]}}>
							CLICK ME TO TEST REDUX!
						</div>		
						<div id={"#cta"} style={styles.cta}>
							<div id={"#cta-info"} style={styles.ctaInfo}>
								<h2 id={"#cta-headline"} style={styles.ctaHeadline}>
									Chocolate Passion Cake Modern  Sugar
								</h2>
								<p id={"#cta-value-proposition"} style={styles.ctaValueProposition}>
									Fruitcake donut gummies. Candy liquorice biscuit. Sugar plum jelly gummi bears brownie toffee cupcake caramels brownie cookie.
								</p>
								<a id={"#cta-button"} key="iphoneIcon" style={styles.ctaButton} href="#"><img src="https://i.imgur.com/HlXhwuW.png" style={styles.iphoneIcon} />Download on appstore</a>
							</div>
							<img style={styles.iphoneHero, this.state.iphoneHeroOff} src="https://i.imgur.com/sOKU33v.png" id={"#iphone-hero-off"} />
							<img style={styles.iphoneHero, this.state.iphoneHeroButton} src="https://i.imgur.com/48ksIm5.png" id={"#iphone-hero-button"} />
							<img style={styles.iphoneHero, this.state.iphoneHeroButton} src="https://i.imgur.com/5sjS6pY.png" id={"#iphone-hero-on"} />
						</div>
					</div>		
				</section>			
			</div>
		);
	}
}

// @keyframes
var iphoneOnAnimation = Radium.keyframes({
	'from': { opacity: '0' },
	'to': { opacity: '1' }
});

var fadeIn = Radium.keyframes({
	'from': { opacity: '0' },
	'to': { opacity: '1' }
});

var slideUp = Radium.keyframes({
	'from': { transform: 'translateY(1000px)' },
	'to': { transform: 'translateY()' }
});

const styles = {
	hero: {
		backgroundImage: 'linear-gradient(rgba(218, 51, 46, 0.6), rgba(218, 51, 46, 0.6)), url("https://i.imgur.com/VDPYj9D.png")',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundAttachment: 'fixed'
	},
	container: {
		maxWidth: '1100px',
		margin: '0 auto', 
		padding: '2% 2%',
		overflow: 'hidden',
	},
	header: {
		border: 'solid black 1px',
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		alignItems: 'center',
	},
	headerLogo: {
		border: 'solid black 1px',
		display: 'grid',
		gridTemplateRows: '1fr',
	},
	headerLogoImg: {
		border: 'solid black 1px',
	},
	navbarHeaderMenu: {
		border: 'solid black 1px',
		display: 'grid',
		gridTemplateColumns: 'repeat(5, auto)',
		gridTemplateRows: 'auto',
		justifyItems: 'center',
		listStyleType: 'none',
	},
	navbarHeaderMenuItem: {
		border: 'solid black 1px',
		display: 'grid',
		gridTemplateColumns: '1fr',
	},
	navbarHeaderMenuItemLink: {
		fontSize: '17px',
		textDecoration: 'none',
		color: 'white',

		':hover': {
			color: 'black',
			borderBottom: '4px solid white',
			transition: 'border-bottom 0.2s, color 0.1s',
		}
	},
	cta: {
		marginTop: '90px',
		display: 'grid',
		gridTemplateColumns: '1.618fr 1fr',
		transition: 'background-color 5s',
	},	
	ctaInfo: {
		width: '80%',
	},
	ctaHeadline: {
		color: 'white',
		marginBottom: '40px',
	},
	ctaValueProposition: {
		fontSize: '36px',
		lineHeight: '40px',
		fontFamily: 'Open Sans Condensed',
		color: 'white',
		marginBottom: '55px',
		width: '95%',
	},
	ctaButton: {
		padding: '5% 5%',
		background: '#282828',
		color: 'white',
		textDecoration: 'none',
		borderRadius: '50px',
		':hover': {
			background: '#383737',
			transition: '0.3s',	
		},
	},
	iphoneIcon: {

	},
	iphoneHero: {
		marginBottom: '-240px',
		width: '100%',
	},
	iphoneHeroOff: {
		opacity: '0; ',
	},
	iphoneHeroOn: {

	},
	iphoneHeroOff_animated: {
		animation: 'slideUp 3s ease-out forwards, fadeIn 1.5s forward',
		gridRow: '1',
		gridColumn: '2',
	},
	iphoneHeroButton_animated: {
		animation: 'slideUp 3s ease-out forwards, fadeIn 1.5s forwards',
		marginLeft: '55%',
		width: '15%',
		zIndex: '1',
		gridRow: '1',
		gridColumn: '2',
	},
	iphoneHeroOn_animated: {
		marginTop: '23%',
		paddingRight: '20%',
		paddingLeft: '16%',
		zIndex: '1',
		gridRow: '1',
		gridColumn: '2',
		animation: 'iphoneOn 3s ease-out 3s backwards',
	},
};

function mapStateToProps(state) {
	// destructuring an object as done below, returns an object with a property called state, and that property itself contains the state properties - it does NOT assign an state to an empty object
	return { flipped: state.flipped, ctaTransform: state.ctaTransform };
}

Hero = Radium(Hero);

export default connect(mapStateToProps, actions)(Hero);
