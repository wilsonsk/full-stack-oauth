import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../actions';

import { Wrapper, RootGrid, Headline } from '../../../components/presentational/portfolio/baseballApp/Section_1/Modal';

class Modal extends Component{
	constructor(props) {
		super(props);
	}

	handleLogin() {
		alert('hi ' + JSON.stringify(this.props.auth));
	}

	_renderUser() {
		if(this.props.auth) {
			return (
				<div>{this.props.auth._id}</div>	
			);
		} else {
			return (
				<div>
					<Headline> 
						Create Account
					</Headline>
					<a href="/auth/google">GoogleAuth</a> 
					<input type="button" onClick={this.handleLogin.bind(this)} value="Sign Up" />
				</div>
			);
		}
	}

	render() {
		return(
			<Wrapper>
				<RootGrid>
					{this._renderUser()}
				</RootGrid>
			</Wrapper>
		);
		
	}


}

function mapStateToProps(state) {
	return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(Modal);
