import React from 'react';
import styled from 'styled-components';

const LeftColumn = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: start;

  border: ${props => props.grid ? 'solid white 1px' : null};
`;

export { LeftColumn };
