import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';

import LandingPage from './landingPage/LandingPage';
import Portfolio from './portfolio/landingPage/Portfolio';
import Gallery from './portfolio/gallery/Gallery';

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
				<Route exact path="/" component={Portfolio} />
				<Route exact path="/landing" component={LandingPage} />
				<Route exact path="/gallery" component={Gallery} />
			</div>
		</BrowserRouter>
	    );
	}
}

export default connect(null, actions)(App);
