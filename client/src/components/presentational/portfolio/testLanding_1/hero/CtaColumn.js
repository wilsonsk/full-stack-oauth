import React from 'react';
import styled from 'styled-components';

const CtaColumn = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr;
  grid-template-areas:
	"."
	"cta";

  > * {
	  margin: 0;
	  --view-height: 100vh;
	  font-weight: 600;
  }


  @media(max-width: 768px) and (min-width: 420px){
	  padding-left: 10%;
  }

  border: ${props => props.grid ? 'solid white 1px' : null};
`;

export { CtaColumn };
