import React from 'react';
import styled from 'styled-components';

const RightColumn = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;

  border: ${props => props.grid ? 'solid white 1px' : null};
`;

export { RightColumn };
