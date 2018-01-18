import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class Hero extends Component {

	render() {
		return (
			<section style={styles.hero}>
				<div style={styles.container}>
					<div style={styles.header}>
						<a href="#" style={styles.headerLogo}>
							<img src="https://i.imgur.com/Zqerj8H.png" />
						</a>
						<ul style={styles.navbarHeaderMenu}>
							<li><a href="#">Home</a></li>
							<li><a href="#">Features</a></li>
							<li><a href="#">Download</a></li>
							<li><a href="#">Blog</a></li>
							<li><a href="#">Contact</a></li>
						</ul>
					</div>
				</div>
			</section>
		);
	}
}

function mapStateToProps(state) {
	// destructuring an object as done below, returns an object with a property called state, and that property itself contains the state properties - it does NOT assign an state to an empty object
	return { state };
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
		width: '100%',
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
	},
	navbarHeaderMenu: {
		border: 'solid black 1px',
		display: 'grid',
		gridTemplateColumns: 'repeat(5, auto)',
		listStyleType: 'none',
		justifyItems: 'center',
	}
};

export default connect(mapStateToProps, actions)(Hero);
