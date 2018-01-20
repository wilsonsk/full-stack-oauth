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
  opacity: ${props => props.opacity};
  position: relative;

  margin-top: ${props => props.marginTop};
  padding-left:  ${props => props.paddingLeft};
  z-index: ${props => props.zIndex};
  grid-row: ${props => props.gridRow};
  grid-column: ${props => props.gridColumn};
  animation: ${iphoneOn} ${props => props.animation};
`;

export { IphoneHeroOn };
