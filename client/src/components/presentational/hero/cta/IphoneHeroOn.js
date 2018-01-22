import React from 'react';
import styled, { keyframes } from 'styled-components';

//@keyframes
const iphoneOn = keyframes`
	from { opacity: 0; }
	to { opacity: 1; }
`;

const IphoneHeroOn = styled.div`
  margin-bottom: -240px;
  width: 100%;
  position: relative;

  opacity: 0;
  margin-top: ${props => props.animated ? '30%' : ''};
  padding-left:  ${props => props.animated ? '21%' : ''};
  z-index: ${props => props.animated ? '1' : ''};
  grid-row: ${props => props.animated ? '1' : ''};
  grid-column: ${props => props.animated ? '2' : ''};
  animation: ${props => props.animated ? `
	  	${iphoneOn} 3s ease-out 3s forwards`
		: ''};
  @media (max-width: 300px) {
    margin-top: ${props => props.animated ? '0%' : ''};
  }

`;

export { IphoneHeroOn };
