import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../actions';

import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import Cta2Section from './Cta2Section';
import FooterSection from './FooterSection';

import Profile from './Profile';

class Portfolio extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
	    return (
		    <div>
			<Profile />
		    </div>
	    );
	}
}

export default connect(null, actions)(Portfolio);
