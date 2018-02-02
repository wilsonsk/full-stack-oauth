import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../actions';

import { Container, MainGrid, LogoColumn, Logo, CtaColumn, Cta, WhiteText } from '../../../components/presentational/portfolio/testLanding_1';
class Landing extends Component {
	constructor(props) {
		super(props);
		this.state = {
			grid: false
		}
	}

	_clickGrid() {
		this.setState({
			grid: !this.state.grid
		});
	}
	
	render() {
		return (
			<Container onClick={this._clickGrid.bind(this)}>
				<MainGrid grid={this.state.grid}>
					<LogoColumn grid={this.state.grid}>
						<Logo grid={this.state.grid}>Sky <WhiteText>Wilson</WhiteText></Logo>
					</LogoColumn>
					<CtaColumn grid={this.state.grid}>
						<Cta grid={this.state.grid}>A frontend developer with a passion for <WhiteText>beatiful UI</WhiteText></Cta>
					</CtaColumn>
				</MainGrid>
			</Container>
		);
	}
}

export default connect(null, actions)(Landing);
