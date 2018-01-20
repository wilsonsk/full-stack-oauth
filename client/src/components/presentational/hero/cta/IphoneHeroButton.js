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

const IphoneHeroButton = styled.div`
  opacity: ${props => props.opacity};
  margin-bottom: -240px;
  width: 100%;

  margin-top: ${props => props.marginTop};
  margin-left: ${props => props.marginLeft};
  width: ${props => props.width};
  z-index: ${props => props.zIndex};
  grid-row: ${props => props.gridRow};
  grid-column: ${props => props.gridColumn};

  animation: ${slideUp} ${props => props.animation1}, ${fadeIn} ${props => props.animation2};
`;

export { IphoneHeroButton };
