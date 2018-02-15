import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../../../actions';

import axios from 'axios';

import AddPlayerForm from './AddPlayerForm';

import { Wrapper, RootGrid, Header, HeaderTop, HeaderBottom, ContentGrid, ContentItem } from '../../../components/presentational/portfolio/baseballApp/Section_1/Dashboard';

class Dashboard extends Component{
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<Wrapper>
				<RootGrid>
					<Header>
						<HeaderTop>HeaderTop</HeaderTop>
						<HeaderBottom>
							<div>1</div>
							<div>2</div>
							<div>3</div>
						</HeaderBottom>
					</Header>
					<ContentGrid>
						<ContentItem><Link to='/baseball/chat'>Content Left</Link></ContentItem>
						<ContentItem>Content Right</ContentItem>
						<ContentItem>Content Left</ContentItem>
						<ContentItem>Content Right</ContentItem>
						<ContentItem>Content Left</ContentItem>
						<ContentItem>Content Right</ContentItem>
					</ContentGrid>
					<AddPlayerForm />
				</RootGrid>
			</Wrapper>
		);
		
	}


}

function mapStateToProps(state) {
	return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(Dashboard);
