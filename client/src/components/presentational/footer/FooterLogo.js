import React from 'react';
import styled, { keyframes } from 'styled-components';

const slideDown = keyframes`
  from { transform: translateY(-300px); }
  to { transform: translateY(); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to {opacity: 1; }
`;

const FooterLogo = styled.div`
  animation: ${props => props.animated ? `
	  	${slideDown} 1s both, 
		${fadeIn} 4s forwards`
	  	: ''};
`;

export { FooterLogo };
