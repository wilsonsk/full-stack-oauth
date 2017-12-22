import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Payments from './Payments';
import * as actions from '../actions';

class Header extends Component {
	componentWillMount() {
		this.props.fetchUser();
	}

	renderContent() {
		switch(this.props.auth) {
			case null:
				return;

			case false:
				return (
					<li>
						<a href="/auth/google">Login with Google</a>
					</li>
				);

			default:
				return [
					<li key="0"><Payments /></li>,
					<li key="1" style={{ margin: '0 10px' }}>Credits: {this.props.auth.credits}</li>,
					<li key="2"><a href="/api/logout">Log Out</a></li>
				];
		}
	}

	render() {
		console.log(this.props.auth);
		return (
			<nav>
				<div className="nav-wrapper">
					<Link to={this.props.auth ? '/surveys'  : '/'} className="left brand-logo">
						SmartExchange
					</Link>
					<ul className="right">
						{this.renderContent()}
					</ul>
				</div>	
			</nav>
		);
	}
}

function mapStateToProps(state) {
	return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(Header);
