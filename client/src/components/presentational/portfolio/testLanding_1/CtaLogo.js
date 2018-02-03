import React from 'react';
import styled from 'styled-components';

const CtaLogo = styled.div`
  grid-area: logo;
  justify-self: end;
  border: ${props => props.grid ? 'solid black 1px' : null};
`;

export { CtaLogo };
