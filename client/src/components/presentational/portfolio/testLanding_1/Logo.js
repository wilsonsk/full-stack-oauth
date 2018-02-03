import React from 'react';
import styled from 'styled-components';

const Logo = styled.h1`
  grid-area: logo;
  align-self: end;
  margin: 0;
  border: ${props => props.grid ? 'solid black 1px' : null};
`;

export { Logo };
