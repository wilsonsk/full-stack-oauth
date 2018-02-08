import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';

import * as actions from '../../../actions';

import { Section_2, WrapperGrid, MainGrid, LeftColumn, RightColumn, Header, SubHeaderColumn, SubHead, SubHeadFeatColumn, SubHeadFeatItem, LeftSpace, WhiteText } from '../../../components/presentational/portfolio/testLanding_1/features';

class Features extends Component {
	constructor(props) {
		super(props);
		this.props.setGrid(false);
		window.addEventListener("resize", this._checkWidth.bind(this));
		window.addEventListener("scroll", this._parallax.bind(this));
		this.state = {
			mobile: '',
			parallaxTop: '',
		}
	}

	componentDidMount() {
		this._checkWidth();
	}

	_clickGrid() {
		var grid = this.props.grid,
		    gridIndex = grid.length-1;

		this.props.setGrid(!grid[gridIndex]);
	}

	_checkWidth() {
		if(window.innerWidth < 768) {
			this.setState({
				mobile: true
			});
		} else {
			this.setState({
				mobile: false
			});
		}
	}

	_parallax() {
		this.setState({
			parallaxTop: this.main.getBoundingClientRect().top + 'px'
		});
		alert(this.state.parallaxTop);
	}

	_renderMainGrid() {
		var grid = this.props.grid,
		    gridIndex = grid.length-1;
		if(this.state.mobile) {
			return (
				<MainGrid mobile={this.state.mobile} grid={grid[gridIndex]}>
					<Header grid={grid[gridIndex]}>
						<WhiteText>Designer</WhiteText>
					</Header>
					<SubHeaderColumn grid={grid[gridIndex]}>
						<SubHead grid={grid[gridIndex]}>
							<WhiteText>Testing</WhiteText>
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
					<Header grid={grid[gridIndex]}>
						<WhiteText>Developer</WhiteText>
					</Header>
					<SubHeaderColumn grid={grid[gridIndex]}>
						<SubHead grid={grid[gridIndex]}>
							<WhiteText>Testing</WhiteText>
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
					<Header grid={grid[gridIndex]}>
						test
					</Header>
					<SubHeaderColumn grid={grid[gridIndex]}>
						<SubHead grid={grid[gridIndex]}>
							Testing
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
				</MainGrid>
			);
		} else {
			return (
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
							Testing

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
							Testing

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
							Testing

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
			);
		}
	}
	
	render() {
		var grid = this.props.grid,
		    gridIndex = grid.length-1;
		return (
			<div ref={el => this.main = el}>
				<Section_2 grid={grid[gridIndex]} >
					<WrapperGrid grid={grid[gridIndex]}>
						<LeftSpace>
							Sky Wilson
						</LeftSpace>
						{this._renderMainGrid()}
					</WrapperGrid>
				</Section_2>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { grid: state.grid.grid };
}

export default connect(mapStateToProps, actions)(Features);
