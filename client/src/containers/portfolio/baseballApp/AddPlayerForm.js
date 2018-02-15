import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../actions';

import axios from 'axios';

import { Wrapper, RootGrid, Header, LeftSideMenu, RightSideMenu, Form,  } from '../../../components/presentational/portfolio/baseballApp/Section_1/Dashboard';

class AddPlayerForm extends Component{
	constructor(props) {
		super(props);
	}

	async _addPlayer() {
		const res = await axios.post('/api/addPlayer/', {
			playerPosition: this.playerPosition.value,
			playerName: this.playerName.value,
		});
	}

	render() {
		return(
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
		
	}


}

function mapStateToProps(state) {
	return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(AddPlayerForm);
