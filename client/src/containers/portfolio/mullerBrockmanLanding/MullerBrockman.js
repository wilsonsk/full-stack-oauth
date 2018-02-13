import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../actions';

import Section_1 from './Section_1';

class MullerBrockman extends Component {
	render() {
		return (
			<Section_1 />
		);
	}	
}

export default connect(null, actions)(MullerBrockman);
