import React from 'react';
import styled from 'styled-components';

const MenuItem = styled.div`
  grid-column: start;
  font-size: ${props => props.logo ? '26px' : '12px'};
  font-family: 'Roboto Mono', monospace;
  align-self: ${props => props.logo ? 'end': ''};
  position: relative;
  
  > * {
	border-bottom: solid white 1px;
	color: black;
  	text-decoration: none;
	&:hover {
		border-bottom: solid black 1px;
		transition: border-bottom 0.4s, color 0.1s;
  	}
  }
`;


export { MenuItem };
