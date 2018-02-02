import React from 'react';
import styled from 'styled-components';

const LogoColumn = styled.div`
  display: grid;
  grid-template-rows: 1fr 1.618fr;
  grid-template-areas:
	"logo"
	"space";

  > * {
	  font-weight: 600;
	  margin: 0;
  }

  border: ${props => props.grid ? 'solid black 1px' : null};
`;

export { LogoColumn };
