import React from 'react';
import styled from 'styled-components';

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.mobile ? '' : '1fr 1.618fr'};
  grid-template-rows: ${props => props.mobile ? '1fr' : '100vh'};

  @media(min-width: 768px) {
	grid-area: main;
  }

  border: ${props => props.grid ? 'solid white 1px' : null};
`;

export { MainGrid };
