import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
	from { opacity: 0 }
	to { opacity: 1 }
`;
	
const slideUp = keyframes`
	from { transform: translateY(1000px) }
	to { transform: translateY() }
`;

const IphoneHeroOff = styled.div`
  position: absolute;
  opacity: ${props => props.animated ? '1' : '0'};
  margin-bottom: -240px;
  width: 100%;
  animation: ${props => props.animated ? `
		${slideUp} 3s ease-out forwards, 
		${fadeIn} 1.5s forwards`
		: ''};
  grid-row: ${props => props.animated ? '1' : ''};
  grid-column: ${props => props.animated ? '2' : ''};
`;

export { IphoneHeroOff };
