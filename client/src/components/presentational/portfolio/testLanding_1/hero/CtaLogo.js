import React from 'react';
import styled from 'styled-components';

const CtaLogo = styled.div`
  grid-area: logo;
  justify-self: end;
  border: ${props => props.grid ? 'solid white 1px' : null};
 
  margin-bottom: 1em;
  border-bottom: solid #3D1E37 3px;
`;

export { CtaLogo };
