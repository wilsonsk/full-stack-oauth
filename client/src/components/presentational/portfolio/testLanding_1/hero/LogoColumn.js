import React from 'react';
import styled from 'styled-components';

const LogoColumn = styled.div`
  display: grid;
  @media(max-width: 768px) {
	grid-template-rows: 1fr;
	grid-template-areas:
		"logo"
  }
  @media(min-width: 768px) {
	grid-template-rows: 1fr 1.618fr;
	grid-template-areas:
		"logo"
		"space";
  }

  > * {
	  font-weight: 600;
	  margin: 0;
  }


  border: ${props => props.grid ? 'solid white 1px' : null};
`;

export { LogoColumn };
