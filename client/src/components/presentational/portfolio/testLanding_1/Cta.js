import React from 'react';
import styled from 'styled-components';

const Cta = styled.div`
  grid-area: cta;
  display: grid;
  grid-template-rows: auto;  

  border: ${props => props.grid ? 'solid black 1px' : null};
`;

export { Cta };
