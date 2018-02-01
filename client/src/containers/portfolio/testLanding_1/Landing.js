import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../actions';

import { Container, MainGrid, LogoColumn, CtaColumn, WhiteText } from '../../../components/presentational/portfolio/testLanding_1';
class Landing extends Component {
	
	render() {
		return (
			<Container>
				<MainGrid>
					<LogoColumn><h2>Sky <WhiteText>Wilson</WhiteText></h2></LogoColumn>
					<CtaColumn><p>A frontend developer with a passion for <WhiteText>beatiful UI</WhiteText></p></CtaColumn>
				</MainGrid>
			</Container>
		);
	}
}

export default connect(null, actions)(Landing);
