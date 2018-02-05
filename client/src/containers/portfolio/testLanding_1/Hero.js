import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../actions';

import { Section_1, MainGrid, LogoColumn, Logo, CtaColumn, Cta, CtaText, CtaLink, CtaLogo, WhiteText } from '../../../components/presentational/portfolio/testLanding_1/hero';

class Hero extends Component {
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
			<Section_1 grid={grid[gridIndex]} >
				<MainGrid grid={grid[gridIndex]}>
					<LogoColumn grid={grid[gridIndex]}>
						<Logo grid={grid[gridIndex]}>Sky <WhiteText>Wilson</WhiteText></Logo>
					</LogoColumn>
					<CtaColumn grid={grid[gridIndex]}>
						<Cta grid={grid[gridIndex]}>
							<CtaText grid={grid[gridIndex]}>A frontend developer with a passion for <WhiteText>beatiful UI</WhiteText></CtaText>
							<CtaLink grid={grid[gridIndex]}>
								<button onClick={this._clickGrid.bind(this)}>See My Grid</button>
							</CtaLink>
							<CtaLogo grid={grid[gridIndex]}>
								(logo)
							</CtaLogo>
						</Cta>
					</CtaColumn>
				</MainGrid>
			</Section_1>
		);
	}
}

function mapStateToProps(state) {
	return { grid: state.grid.grid };
}

export default connect(mapStateToProps, actions)(Hero);
