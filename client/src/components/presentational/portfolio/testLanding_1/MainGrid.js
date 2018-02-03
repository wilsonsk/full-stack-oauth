import React from 'react';
import styled from 'styled-components';

const MainGrid = styled.div`
  display: grid;

  border: ${props => props.grid ? 'solid black 1px' : null};

  @media(max-width: 768px) {
	grid-template-columns: 1fr;
	grid-auto-rows: 50vh;
  }

  @media(max-width: 1210px) and (min-width: 769px){
	grid-template-columns: 1fr 3fr 0.5fr;
	grid-auto-rows: 100vh;
  }

  @media(max-width: 1600px) and (min-width: 1210px){
	grid-template-columns: 1fr 3fr 1fr;
	grid-auto-rows: 100vh;
  }
`;

export { MainGrid };
