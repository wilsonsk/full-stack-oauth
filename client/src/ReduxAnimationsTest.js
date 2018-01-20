import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../actions';

class Hero extends Component {
	constructor() {
		super();
	}

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
				<section style={styles.hero}>
					<div style={styles.container}>
						
						<div style={styles.header}>
							<a style={styles.headerLogo} href="#"><img style={styles.headerLogoImg} src="https://i.imgur.com/Zqerj8H.png" /></a>
							<ul style={styles.navbarHeaderMenu}>
								<li style={styles.navbarHeaderMenuItem}><Link style={styles.navbarHeaderMenuItemLink} to={'/'} >Home</Link></li>
								<li style={styles.navbarHeaderMenuItem}><a style={styles.navbarHeaderMenuItemLink} href="#">Features</a></li>
								<li style={styles.navbarHeaderMenuItem}><a style={styles.navbarHeaderMenuItemLink} href="#">Download</a></li>
								<li style={styles.navbarHeaderMenuItem}><a style={styles.navbarHeaderMenuItemLink} href="#">Blog</a></li>
								<li style={styles.navbarHeaderMenuItem}><a style={styles.navbarHeaderMenuItemLink} href="#">Contact</a></li>
							</ul>		
						</div>
						
						<div onClick={this.CTAclickHandler.bind(this)} style={{transform: ctaTransform[ctaTransformIndex]}}>
							CLICK ME TO TEST REDUX!
						</div>		
							
					</div>		
				</section>			
			</div>
		);
	}
}

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
		border: 'solid black 1px',
		fontSize: '17px',
		textDecoration: 'none',
		color: 'white'
	},
	cta: {
		transition: 'background-color 5s',
	},	
};

function mapStateToProps(state) {
	// destructuring an object as done below, returns an object with a property called state, and that property itself contains the state properties - it does NOT assign an state to an empty object
	return { flipped: state.flipped, ctaTransform: state.ctaTransform };
}

export default connect(mapStateToProps, actions)(Hero);
