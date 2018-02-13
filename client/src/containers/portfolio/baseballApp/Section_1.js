import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../actions';

import Modal from './Modal';

import { RootWrapper, RootGrid, Logo, Footer } from '../../../components/presentational/portfolio/baseballApp/Section_1';

class Section_1 extends Component {
	render() {
		return (
			<RootWrapper>
				<RootGrid>
					<Logo>
						Logo
					</Logo>
					<Modal />
					<Footer>
						Footer
					</Footer>
				</RootGrid>
			</RootWrapper>
				
		);
	}

}

export default connect(null, actions)(Section_1);
