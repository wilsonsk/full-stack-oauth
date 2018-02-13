import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../actions';

import { MainWrapper } from '../../../components/presentational/portfolio/mullerBrockman/section_1';

class Section_1 extends Component {
	render() {
		return (
			<div>hellowWorld</div>
		);
	}

}

export default connect(null, actions)(Section_1);
