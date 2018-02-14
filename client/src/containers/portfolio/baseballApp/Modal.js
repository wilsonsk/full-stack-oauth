import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../actions';

import axios from 'axios';

import { Wrapper, RootGrid, Headline } from '../../../components/presentational/portfolio/baseballApp/Section_1/Modal';

class Modal extends Component{
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
				<form onSubmit={this._addPlayer.bind(this)}>
					<RootGrid>
					<div>{JSON.stringify(this.props.auth.team)}</div>
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
						<input type="submit" />
					</RootGrid>
				</form>
			);
		} else {
			return (
				<RootGrid>
					<Headline> 
						Create Account
					</Headline>
					<a href="/auth/google">GoogleAuth</a> 
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

export default connect(mapStateToProps, actions)(Modal);
