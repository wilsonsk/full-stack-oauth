import React from 'react';
import styled from 'styled-components';

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-auto-rows: 100vh;

  > * {
	border: black solid 3px;
  }
`;

export { MainGrid };
