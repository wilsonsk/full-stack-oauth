import React from 'react';
import styled from 'styled-components';

const MainGrid = styled.section`
  // Style Settings
  background-color: linear-gradient(90deg, white, #F2F3F7);
  border: solid white 4px;
  box-shadow: 0px 1px 10px black; 
  box-shadow: 0px 3px 15px rgba(0,0,0,0.2);

  // Grid Settings 
  object-fit: cover;
  display: grid;
  grid-template-columns: [head-start] minmax(100px, 1fr) minmax(100px, 1fr) [main-start] minmax(100px, 1fr) minmax(100px, 1fr) minmax(100px, 1fr) [main-end] minmax(100px, 1fr) minmax(100px, 1fr) [end];
  grid-template-rows: [start] minmax(100px, 1fr) [main-start] minmax(100px, 1fr)[main-end] minmax(100px, 1fr) [end];
  grid-template-areas: 
	"Header Header Hero Hero Hero Cta Cta"
	"Header Header Hero Hero Hero Cta Cta"
	"ValueProp ValueProp Hero Hero Hero Cta2 Cta2";
  > * {
    border: solid black 1px;
  }
`;

export { MainGrid };
