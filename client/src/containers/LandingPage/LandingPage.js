import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import Cta2Section from './Cta2Section';
import FooterSection from './FooterSection';

class LandingPage extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
	    return (
		    <div>
			<HeroSection />
		    	<FeaturesSection />
		    	<Cta2Section />
		    	<FooterSection />
		    </div>
	    );
	}
}

export default connect(null, actions)(LandingPage);
