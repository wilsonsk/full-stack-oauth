import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';

import * as actions from '../../../actions';

import { Section_2, WrapperGrid, MainGrid, LeftColumn, RightColumn, Header, SubHeaderColumn, SubHead, SubHeadFeatColumn, SubHeadFeatItem, LeftSpace, WhiteText, ParallaxObj } from '../../../components/presentational/portfolio/testLanding_1/features';

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
		let main = this.main.getBoundingClientRect().top*-1;
		let height = this.main.getBoundingClientRect().height;
		let windowHeight = window.innerHeight;

		if(this.state.mobile) {
			if(main >= -400 && main <= height) {
				this.setState({
					parallaxTop: height - main + 'px',
					within: true
				});
			} else {
				this.setState({
					within: false
				});
			}
		} else {
			if(main >= -100 && main <= height) {
				this.setState({
					parallaxTop: height - main + 'px',
					within: true
				});
			} else {
				this.setState({
					within: false
				});
			}
		}
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
							<WhiteText>SubHead</WhiteText>
						</SubHead>
						<SubHeadFeatColumn grid={grid[gridIndex]}>
							<SubHeadFeatItem grid={grid[gridIndex]} within={this.state.within} trans={'opacity 1s'}>
								feat 1
							</SubHeadFeatItem>
							<SubHeadFeatItem grid={grid[gridIndex]} within={this.state.within} trans={'opacity 3s'}>
								feat 2
							</SubHeadFeatItem>
							<SubHeadFeatItem grid={grid[gridIndex]} within={this.state.within} trans={'opacity 5s'}>
								feat 3
							</SubHeadFeatItem>
						</SubHeadFeatColumn>
					</SubHeaderColumn>
					<Header grid={grid[gridIndex]}>
						<WhiteText>Developer</WhiteText>
					</Header>
					<SubHeaderColumn grid={grid[gridIndex]}>
						<SubHead grid={grid[gridIndex]}>
							<WhiteText>SubHead</WhiteText>
						</SubHead>
						<SubHeadFeatColumn grid={grid[gridIndex]}>
							<SubHeadFeatItem grid={grid[gridIndex]} within={this.state.within} trans={'opacity 1s'}>
								Feat 1
							</SubHeadFeatItem>
							<SubHeadFeatItem grid={grid[gridIndex]} within={this.state.within} trans={'opacity 3s'}>
								Feat 2
							</SubHeadFeatItem>
							<SubHeadFeatItem grid={grid[gridIndex]} within={this.state.within} trans={'opacity 5s'}>
								Feat 3	
							</SubHeadFeatItem>
						</SubHeadFeatColumn>
					</SubHeaderColumn>
					<Header grid={grid[gridIndex]}>
						<WhiteText>SEO</WhiteText>
					</Header>
					<SubHeaderColumn grid={grid[gridIndex]}>
						<SubHead grid={grid[gridIndex]}>
							<WhiteText>SubHead</WhiteText>
						</SubHead>
						<SubHeadFeatColumn grid={grid[gridIndex]}>
							<SubHeadFeatItem grid={grid[gridIndex]} within={this.state.within} trans={'opacity 1s'}>
								Feat 1
							</SubHeadFeatItem>
							<SubHeadFeatItem grid={grid[gridIndex]} within={this.state.within} trans={'opacity 3s'}>
								Feat 2
							</SubHeadFeatItem>
							<SubHeadFeatItem grid={grid[gridIndex]} within={this.state.within} trans={'opacity 5s'}>
								Feat3	
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
							<WhiteText>Design</WhiteText>
						</Header>
						<Header grid={grid[gridIndex]}>
							<WhiteText>Development</WhiteText>
						</Header>
						<Header grid={grid[gridIndex]}>
							<WhiteText>SEO</WhiteText>
						</Header>
					</LeftColumn>
					<RightColumn grid={grid[gridIndex]}>
						<SubHeaderColumn grid={grid[gridIndex]}>
							<SubHead grid={grid[gridIndex]}>
								<WhiteText>SubHead</WhiteText>
							</SubHead>
							<SubHeadFeatColumn grid={grid[gridIndex]}>
								<SubHeadFeatItem grid={grid[gridIndex]} within={this.state.within} trans={'opacity 1s'}>
									feat 1
								</SubHeadFeatItem>
								<SubHeadFeatItem grid={grid[gridIndex]} within={this.state.within} trans={'opacity 3s'}>
									feat 2
								</SubHeadFeatItem>
								<SubHeadFeatItem grid={grid[gridIndex]} within={this.state.within} trans={'opacity 5s'}>
									feat 3
								</SubHeadFeatItem>
							</SubHeadFeatColumn>
						</SubHeaderColumn>
						<SubHeaderColumn grid={grid[gridIndex]}>
							<SubHead grid={grid[gridIndex]}>
								<WhiteText>SubHead</WhiteText>

							</SubHead>
							<SubHeadFeatColumn grid={grid[gridIndex]}>
								<SubHeadFeatItem grid={grid[gridIndex]} within={this.state.within} trans={'opacity 1s'}>
									Feat 1
								</SubHeadFeatItem>
								<SubHeadFeatItem grid={grid[gridIndex]} within={this.state.within} trans={'opacity 3s'}>
									Feat 2
								</SubHeadFeatItem>
								<SubHeadFeatItem grid={grid[gridIndex]} within={this.state.within} trans={'opacity 5s'}>
									Feat 3
								</SubHeadFeatItem>
							</SubHeadFeatColumn>
						</SubHeaderColumn>
						<SubHeaderColumn grid={grid[gridIndex]}>
							<SubHead grid={grid[gridIndex]}>
								<WhiteText>SubHead</WhiteText>

							</SubHead>
							<SubHeadFeatColumn grid={grid[gridIndex]}>
								<SubHeadFeatItem grid={grid[gridIndex]} within={this.state.within} trans={'opacity 1s'}>
									Feat 1
								</SubHeadFeatItem>
								<SubHeadFeatItem grid={grid[gridIndex]} within={this.state.within} trans={'opacity 3s'}>
									Feat 2
								</SubHeadFeatItem>
								<SubHeadFeatItem grid={grid[gridIndex]} within={this.state.within} trans={'opacity 5s'}>
									Feat 3
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
