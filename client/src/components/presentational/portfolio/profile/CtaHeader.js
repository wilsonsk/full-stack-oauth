import React from 'react';
import styled from 'styled-components';

const CtaHeader = styled.div`
  grid-area: Cta;
  font-family: 'Roboto Mono', monospace;
  font-size: 12px;
  justify-self: end;

  grid-template-columns: [start] minmax(auto, 1fr) [mid] 1fr [end];
  grid-template-rows: auto;

  @media(max-width: 768px) {
	  grid-template-columns: [start] 1fr [end];
	  grid-template-rows: auto;
  }

  > * {
    border: solid black 1px;
`;


export { CtaHeader };
