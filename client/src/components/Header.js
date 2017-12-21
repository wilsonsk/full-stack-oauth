import React, { Component } from 'react';
import { connect } from 'react-redux';


class Header extends Component {
	renderContent() {
		case default:
			return (
				<li>
					<a href="/api/log">Log Out</a>
				</li>
			);

		case null:
			return;

		case false:
			return (
				<li>
					<a href="/auth/google">Login with Google</a>
				</li>
			);
	}

	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<a className="left brand-logo">
						Full Stack Oauth
					</a>
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

export default connect(mapStateToProps)(Header);
