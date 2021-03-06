import React from 'react';
import styled from 'styled-components';

const SubHeaderColumn = styled.div`
  display: grid;
  grid-template-rows: auto 1.618fr;

  border: ${props => props.grid ? 'solid white 1px' : null};
`;

export { SubHeaderColumn };
