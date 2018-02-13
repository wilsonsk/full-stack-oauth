import React from 'react';
import styled from 'styled-components';

const RootGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 3fr 1fr;
  grid-template-areas:
	". logo ."
	". modal ."
	"footer footer footer";
  height: 100vh;

`;

export { RootGrid };
