import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../actions';

import { Section_1, MainGrid, LogoColumn, Logo, CtaColumn, Cta, CtaText, CtaLink, CtaLogo, WhiteText } from '../../../components/presentational/portfolio/testLanding_1';
class Hero extends Component {
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
			<Section_1 onClick={this._clickGrid.bind(this)}>
				<MainGrid grid={this.state.grid}>
					<LogoColumn grid={this.state.grid}>
						<Logo grid={this.state.grid}>Sky <WhiteText>Wilson</WhiteText></Logo>
					</LogoColumn>
					<CtaColumn grid={this.state.grid}>
						<Cta grid={this.state.grid}>
							<CtaText grid={this.state.grid}>A frontend developer with a passion for <WhiteText>beatiful UI</WhiteText></CtaText>
							<CtaLink grid={this.state.grid}>
								<WhiteText>See My GitHub</WhiteText>
							</CtaLink>
							<CtaLogo grid={this.state.grid}>
								(logo)
							</CtaLogo>
						</Cta>
					</CtaColumn>
				</MainGrid>
			</Section_1>
		);
	}
}

export default connect(null, actions)(Hero);
