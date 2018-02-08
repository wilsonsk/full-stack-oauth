import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../actions';

import { Section_2, WrapperGrid, MainGrid, LeftColumn, RightColumn, Header, SubHeaderColumn, SubHead, SubHeadFeatColumn, SubHeadFeatItem, LeftSpace } from '../../../components/presentational/portfolio/testLanding_1/features';

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
				<WrapperGrid grid={grid[gridIndex]}>
					<LeftSpace>
						Sky Wilson
					</LeftSpace>
					<MainGrid grid={grid[gridIndex]}>
						<LeftColumn grid={grid[gridIndex]}>
							<Header grid={grid[gridIndex]}>
								Test

							</Header>
							<Header grid={grid[gridIndex]}>
								Test

							</Header>
							<Header grid={grid[gridIndex]}>
								Test

							</Header>
						</LeftColumn>
						<RightColumn grid={grid[gridIndex]}>
							<SubHeaderColumn grid={grid[gridIndex]}>
								<SubHead grid={grid[gridIndex]}>

								</SubHead>
								<SubHeadFeatColumn grid={grid[gridIndex]}>
									<SubHeadFeatItem grid={grid[gridIndex]}>

									</SubHeadFeatItem>
									<SubHeadFeatItem grid={grid[gridIndex]}>

									</SubHeadFeatItem>
									<SubHeadFeatItem grid={grid[gridIndex]}>

									</SubHeadFeatItem>
								</SubHeadFeatColumn>
							</SubHeaderColumn>
							<SubHeaderColumn grid={grid[gridIndex]}>
								<SubHead grid={grid[gridIndex]}>

								</SubHead>
								<SubHeadFeatColumn grid={grid[gridIndex]}>
									<SubHeadFeatItem grid={grid[gridIndex]}>

									</SubHeadFeatItem>
									<SubHeadFeatItem grid={grid[gridIndex]}>

									</SubHeadFeatItem>
									<SubHeadFeatItem grid={grid[gridIndex]}>

									</SubHeadFeatItem>
								</SubHeadFeatColumn>
							</SubHeaderColumn>
							<SubHeaderColumn grid={grid[gridIndex]}>
								<SubHead grid={grid[gridIndex]}>

								</SubHead>
								<SubHeadFeatColumn grid={grid[gridIndex]}>
									<SubHeadFeatItem grid={grid[gridIndex]}>

									</SubHeadFeatItem>
									<SubHeadFeatItem grid={grid[gridIndex]}>

									</SubHeadFeatItem>
									<SubHeadFeatItem grid={grid[gridIndex]}>

									</SubHeadFeatItem>
								</SubHeadFeatColumn>
							</SubHeaderColumn>
						</RightColumn>
					</MainGrid>
				</WrapperGrid>
			</Section_2>
		);
	}
}

function mapStateToProps(state) {
	return { grid: state.grid.grid };
}

export default connect(mapStateToProps, actions)(Features);
