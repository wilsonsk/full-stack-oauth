import React from 'react';
import styled, { keyframes }from 'styled-components';

const slideUp = keyframes`
  from { transform: translateY(300px); }
  to { transform: translateX(); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to {opacity: 1; }
`;

const FeaturesContentColB = styled.div`
  opacity: 0;
  animation: ${props => props.animated ? `
		${slideUp} 2s linear,
		${fadeIn} 1s forwards linear`
	  	: ''};
`;

export { FeaturesContentColB };
