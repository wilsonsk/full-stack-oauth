import React, { Component } from 'react';
import { connect } from 'react-redux';

import io from 'socket.io-client';

import * as actions from '../../../actions';

import { Wrapper } from '../../../components/presentational/portfolio/baseballApp/Section_1/Chat';

class Chat extends Component{
	constructor(props) {
		super(props);
		this.state = {
			socket: io('http://localhost:5000')
		};
	}

	componentDidMount() {
		this.addEventListeners();
		this.initColor();
	}

	addEventListeners() {
		const { socket } = this.state;
		window.addEventListener('keypress', () => {
			socket.emit('typing');
		});
	}

	initUser() {
		const { socket } = this.state;
		socket.emit('connected', (this.props.auth));
	}

	socketListenerGotIt() {
		const { socket } = this.state;
		socket.on('gotIt', () => {
			this.colorDiv.style.color=this.state.color;
			this.colorDiv.innerText=this.state.color;
		});
	}

	socketListenerTyping() {
		const { socket } = this.state;
		socket.on('typing', () => {
			this.setState({
				status: "typing..."
			});
		});
	}

	initColor() {
		this.setState({
			color: this.color.value
		});
	}

	handleColor() {
		const { socket } = this.state;
		socket.emit('color change', this.state.color);
	}

	render() {
		this.initUser();
		this.socketListenerGotIt();
		this.socketListenerTyping();
		return(
			<Wrapper>
				<div>chat status: {this.state.status}</div>
				<div ref={(colorDiv)=>{this.colorDiv = colorDiv;}} />
				<select ref={(color) => {this.color = color;}} onChange={() => this.setState({ color: this.color.value })}>
					<option value="red" onChange>
						red
					</option>
					<option value="blue">
						blue
					</option>
				</select>
				<input type="button" onClick={this.handleColor.bind(this)} />

			</Wrapper>
		);
		
	}


}

function mapStateToProps(state) {
	return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(Chat);
