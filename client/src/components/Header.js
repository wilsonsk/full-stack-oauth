import React, { Component } from 'react';
import { connect } from 'react-redux';


class Header extends Component {
	render() {
`		console.log(this.props);
		return (
			<nav>
				<div className="nav-wrapper">
					<a className="left brand-logo">
						Full Stack Oauth
					</a>
					<ul className="right">
						<li>
							<a href="/auth/google">Login with Google</a>
						</li>
					</ul>
				</div>	
			</nav>
		);
	}
}

function mapStateToProps(state) {
	return { auth: state.auth };
}

export default connect()(Header);
