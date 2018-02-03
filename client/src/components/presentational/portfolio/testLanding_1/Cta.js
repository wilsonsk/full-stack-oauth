import React from 'react';
import styled from 'styled-components';

const Cta = styled.div`
  grid-area: cta;
  display: grid;
  @media(max-width: 768px) {
	grid-template-rows: minmax(1fr, auto) minmax(2fr, auto) minmax(1fr, auto);
  	grid-template-areas:
		"text"
		"link"
		"logo";
  }

  @media(min-width: 769px) {
	grid-template-rows: minmax(1fr, auto) minmax(2fr, auto) minmax(1fr, auto);
  	grid-template-areas:
		"text"
		"link"
		"logo";
	  align-items: end;
  }

  border: ${props => props.grid ? 'solid black 1px' : null};
`;

export { Cta };
