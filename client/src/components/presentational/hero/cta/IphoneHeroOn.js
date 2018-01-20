import React from 'react';
import styled, { keyframes } from 'styled-components';

//@keyframes
const iphoneOn = keyframes`
	from: { opacity: 0; }
	to: { opacity: 1; }
`;

const fadeIn = keyframes`
	from: { opacity: 0 },
	to: { opacity: 1 }
`;

const slideUp = keyframes`
	from: { transform: translateY(1000px) },
	to: { transform: translateY() }
`;

const IphoneHeroOn = styled.div`
  margin-bottom: -240px;
  width: 100%;

  margin-top: ${props => props.marginTop};
  padding-right:  ${props => props.paddingRight};
  padding-left:  ${props => props.paddingLeft};
  z-index: ${props => props.zIndex};
  grid-row: ${props => props.gridRow};
  grid-column: ${props => props.gridColumn};
  animation: ${iphoneOn} 3s ease-out 3s backwards;
`;

export { IphoneHeroOn };
