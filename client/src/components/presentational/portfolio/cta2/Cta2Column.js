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

const Cta2Column = styled.div`
  opacity: 0;
  display: grid;
  grid-template-rows: auto auto auto;
  animation: ${props => props.animated ? `
	  	${slideRight} 1.5s,
		${fadeIn} 1s forwards`
	  	: ''};
`;

export { Cta2Column };

