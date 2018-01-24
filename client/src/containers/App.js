import React, { Component } from 'react';
import { BrowserRouter, Route  } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';

import LandingPage from './landingPage/LandingPage';
import Portfolio from './portfolio/Portfolio';

const styles = {
	fontMontserrat: {
		fontFamily: 'Montserrat',
		fontSize: '50px'
	}
};

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
	    return (
		<BrowserRouter>
			<div style={styles.fontMontserrat}>
				<Route path="/" component={Portfolio} />
			</div>
		</BrowserRouter>
	    );
	}
}

export default connect(null, actions)(App);
