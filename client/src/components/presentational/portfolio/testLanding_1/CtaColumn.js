import React from 'react';
import styled from 'styled-components';

const CtaColumn = styled.div`
  display: grid;
  grid-template-rows: 1.618fr 1fr;
  grid-template-areas:
	"."
	"cta";

  > * {
	  margin: 0;
	  --view-height: 100vh;
	  font-weight: 600;
  }

  border: ${props => props.grid ? 'solid black 1px' : null};
`;

export { CtaColumn };
