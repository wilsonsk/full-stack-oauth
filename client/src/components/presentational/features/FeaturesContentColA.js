import React from 'react';
import styled, { keyframes } from 'styled-components';

const slideRight = keyframes`
  from { transform: translateX(-300px); }
  to { transform: translateX(); }  
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const FeaturesContentColA = styled.div`
  opacity: 0;
  animation: ${props => props.animated ? `
		${slideRight} 2s linear backwards, 
		${fadeIn} 1s forwards linear`
	  	: ''};
`;

export { FeaturesContentColA };
