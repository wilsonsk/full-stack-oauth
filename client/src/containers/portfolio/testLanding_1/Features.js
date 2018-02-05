import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../actions';

import { Section_2 } from '../../../components/presentational/portfolio/testLanding_1/features';

class Features extends Component {
	constructor(props) {
		super(props);
		this.props.setGrid(false);
	}

	_clickGrid() {
		var grid = this.props.grid,
		    gridIndex = grid.length-1;

		this.props.setGrid(!grid[gridIndex]);
	}
	
	render() {
		var grid = this.props.grid,
		    gridIndex = grid.length-1;
		return (
			<Section_2 grid={grid[gridIndex]}>
			</Section_2>
		);
	}
}

function mapStateToProps(state) {
	return { grid: state.grid.grid };
}

export default connect(mapStateToProps, actions)(Features);
