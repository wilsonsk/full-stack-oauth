import React from 'react';
import styled from 'styled-components';

const LeftSpace = styled.h1`
  grid-area: left-space;

  	opacity: 0;
  @media(min-width: 200px) and (max-width: 388px) {
  	opacity: 0;
	display:none;
  }

  @media(min-width: 768px) and (max-width: 1210px) {
  	opacity: 0;
	display: unset;
  }

`;

export { LeftSpace };
