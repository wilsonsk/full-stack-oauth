import React from 'react';
import styled, { keyframes } from 'styled-components';

const slideFooterUp = keyframes`
  from { transform: translateY(300px); }
  to { transform: translateY(); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to {opacity: 1; }
`;

const FooterContentColumnB = styled.div`
  opacity: 0;
  align-content: start;
  margin-top: 77px;
  display: grid;
  grid-template-rows: auto auto auto auto;
  color: white;
  padding: 30px;

  animation: ${props => props.animated ? `
	  	${slideFooterUp} 2s 0.5s,
		${fadeIn} 2s forwards 0.5s`
	  	: ''};
`;

export { FooterContentColumnB };
