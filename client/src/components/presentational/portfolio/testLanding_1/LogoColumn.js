import React from 'react';
import styled from 'styled-components';

const LogoColumn = styled.div`
  display: grid;
  grid-template-rows: 1fr 1.618fr;
  align-items: end;
 
  > * {
	  font-weight: 600;
	  border: solid white 2px;
  }
`;

export { LogoColumn };
