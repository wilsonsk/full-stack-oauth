import React, { Component } from 'react';

class Header extends Component {
	render() {
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
				</di>	
			</nav>
		);
	}
}

export default Header;
