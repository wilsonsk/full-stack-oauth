import React from 'react';
import styled from 'styled-components';

const CtaLink = styled.div`
  grid-area: link;
  font-size: 12pt;
  border: ${props => props.grid ? 'solid white 1px' : null};
`;

export { CtaLink };
