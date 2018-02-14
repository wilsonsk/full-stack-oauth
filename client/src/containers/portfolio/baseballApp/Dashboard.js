import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../actions';

import axios from 'axios';

import { Wrapper, RootGrid, Headline, Form, AuthLink } from '../../../components/presentational/portfolio/baseballApp/Section_1/Modal';

class Dashboard extends Component{
	constructor(props) {
		super(props);
	}

	handleLogin() {
		alert('hi ' + JSON.stringify(this.props.auth));
	}

	async _addPlayer() {
		const res = await axios.post('/api/addPlayer/', {
			playerPosition: this.playerPosition.value,
			playerName: this.playerName.value,
		});
	}

	_renderUser() {
		if(this.props.auth) {
			return (
				<Form onSubmit={this._addPlayer.bind(this)}>
					<select ref={(input) => { this.playerPosition = input; }}>
						<option value="pitcher">P</option>
						<option value="catcher">C</option>
						<option value="firstbase">1B</option>
						<option value="secondbase">2B</option>
						<option value="thirdbase">3B</option>
						<option value="shortstop">SS</option>
						<option value="outfield">OF</option>
					</select>
					<input ref={(input) => { this.playerName = input; }} type="text" placeholder="Player Name" />
					<input type="submit" value="Add Player" />
				</Form>
			);
		} else {
			return (
				<RootGrid>
					<Headline> 
						Create Account
					</Headline>
					<AuthLink href="/auth/google">
						Log in with Google
					</AuthLink>
				</RootGrid>
			);
		}
	}

	render() {
		return(
			<Wrapper>
				{this._renderUser()}
			</Wrapper>
		);
		
	}


}

function mapStateToProps(state) {
	return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(Dashboard);
