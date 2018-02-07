import React from 'react';
import styled from 'styled-components';

const Logo = styled.h1`
  grid-area: logo;
  @media(max-width: 420px) {
	align-self: start;
  }
  @media(min-width: 388px) {
	align-self: end;
  }
  margin: 0;
  border: ${props => props.grid ? 'solid white 1px' : null};
`;

export { Logo };