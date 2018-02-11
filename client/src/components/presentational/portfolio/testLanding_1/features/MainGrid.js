import React from 'react';
import styled from 'styled-components';

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.mobile ? '' : '1fr 1.618fr'};
  grid-template-rows: ${props => props.mobile ? '1fr' : '100vh'};

  @media(min-width: 200px) and (max-width: 768px) {
	> *:nth-child(1) {
		padding-bottom: 0.50em;
  	}
	> *:nth-child(3) {
		padding-bottom: 0.50em;
		padding-top: 1em;
  	}
	> *:nth-child(5) {
		padding-bottom: 0.50em;
		padding-top: 1em;
  	}
  }

  @media(min-width: 768px) {
	grid-area: main;
	grid-gap 1em;
  }

  border: ${props => props.grid ? 'solid white 1px' : null};
`;

export { MainGrid };
