import React from 'react';
import styled from 'styled-components';

const MainGrid = styled.section`
  // Style Settings
  background-color: white;

  // Grid Settings 
  display: grid;
  grid-template-columns: [head-start] minmax(100px, 1fr) minmax(100px, 1fr) [main-start] minmax(100px, 1fr) minmax(100px, 1fr) minmax(100px, 1fr) [main-end] minmax(100px, 1fr) minmax(100px, 1fr) [end];
  grid-template-rows: [start] minmax(100px, 1fr) [main-start] minmax(100px, 1fr)[main-end] minmax(100px, 1fr) [end];
  grid-template-areas: 
	"Header Header Hero Hero Hero Cta Cta"
	"Header Header Hero Hero Hero Cta Cta"
	"ValueProp ValueProp Hero Hero Hero Cta2 Cta2";

  // Prototype Properties for all direct children of MainGrid
  > * {
  }
`;

export { MainGrid };
