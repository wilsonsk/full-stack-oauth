import React from 'react';
import styled from 'styled-components';

const Cta = styled.section`
  margin-top: 90px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: 
	"CtaInfo  IphoneImage";
  border: solid black 1px;
  transition: 'background-color 5s';
  position: relative;
`;

export { Cta };
