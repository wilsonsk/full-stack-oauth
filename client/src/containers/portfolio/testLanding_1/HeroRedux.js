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
		var { grid } = this.props.grid,
		    gridIndex = grid.length-1;
		alert(JSON.stringify(grid[gridIndex]));
		if(!grid[gridIndex]) {
			this.props.setGrid(true);
		} else { 
			this.props.setGrid(false);
		}
	}
	
	render() {
		var gridIndex = this.props.grid.length-1;

		return (
			<Section_1 grid={this.props.grid[gridIndex]} >
				<MainGrid grid={this.props.grid[gridIndex]}>
					<LogoColumn grid={this.props.grid[gridIndex]}>
						<Logo grid={this.props.grid[gridIndex]}>Sky <WhiteText>Wilson</WhiteText></Logo>
					</LogoColumn>
					<CtaColumn grid={this.props.grid[gridIndex]}>
						<Cta grid={this.props.grid[gridIndex]}>
							<CtaText grid={this.props.grid[gridIndex]}>A frontend developer with a passion for <WhiteText>beatiful UI</WhiteText></CtaText>
							<CtaLink grid={this.props.grid[gridIndex]}>
								<button onClick={this._clickGrid.bind(this)}>See My Grid</button>
							</CtaLink>
							<CtaLogo grid={this.props.grid[gridIndex]}>
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
	return { grid: state.grid};
}

export default connect(mapStateToProps, actions)(Hero);
