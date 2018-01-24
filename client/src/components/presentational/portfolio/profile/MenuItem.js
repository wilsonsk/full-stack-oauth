import React from 'react';
import styled from 'styled-components';

const MenuItem = styled.div`
  border: solid black 1px;
  grid-column: start;
  font-size: ${props => props.logo ? '26px' : '12px'};
  font-family: 'Roboto Mono', monospace;
  align-self: ${props => props.logo ? 'end': ''};
`;


export { MenuItem };
