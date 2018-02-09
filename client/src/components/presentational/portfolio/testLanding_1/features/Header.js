import React from 'react';
import styled from 'styled-components';

const Header = styled.h4`
  position ${props =>props.within ? 'fixed' : 'relative'};
top: ${props => props.within ? props.parallax :  ''};

  @media(min-width: 200px) and (max-width: 768px) {
	font-size: 0.5em; 
  }
 
  margin: 0;

  border: ${props => props.grid ? 'solid white 1px' : null};
`;

export { Header };
