import React from 'react';
import styled from 'styled-components';

const Header = styled.h4`

  @media(min-width: 200px) and (max-width: 768px) {
	font-size: 0.5em; 
  }

  @media(min-width: 768px) {
	font-size: 0.75em;
  }
 
  margin: 0;

  border: ${props => props.grid ? 'solid white 1px' : null};
`;

export { Header };
