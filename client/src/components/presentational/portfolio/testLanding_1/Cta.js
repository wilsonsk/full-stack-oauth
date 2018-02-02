import React from 'react';
import styled from 'styled-components';

const Cta = styled.p`
  grid-area: cta;
  
  border: ${props => props.grid ? 'solid black 1px' : null};
`;

export { Cta };
