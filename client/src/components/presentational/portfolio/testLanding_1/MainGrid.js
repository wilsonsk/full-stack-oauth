import React from 'react';
import styled from 'styled-components';

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-auto-rows: 100vh;

  border: ${props => props.grid ? 'solid black 1px' : null};

  @media(max-width: 320px) {
	grid-template-columns: 1fr;
	grid-template-rows: auto;
  }
`;

export { MainGrid };
