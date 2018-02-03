import React from 'react';
import styled from 'styled-components';

const CtaText = styled.p`
  grid-area: text;
  margin: 0;
  border: ${props => props.grid ? 'solid black 1px' : null};
`;

export { CtaText };
