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
  z-index: ${props => props.zIndex};
  opacity: ${props => props.opacity};
  margin-bottom: -240px;
  width: 100%;
  animation: ${slideUp} ${props => props.animation1}, ${fadeIn} ${props => props.animation2};
  grid-row: ${props => props.gridRow};
  grid-column: ${props => props.gridColumn};
`;

export { IphoneHeroOff };
