import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideLeft = keyframes`
  from { transform: translateX(300px); } 
  to { transform: translateX()}
`;

const FeaturesContentColC = styled.div`
  opacity: 0;
  animation: ${props => props.animated ? `
		${slideLeft} 2s linear, 
		${fadeIn} 1s forwards linear`
	  	: ''};
`;

export { FeaturesContentColC };
