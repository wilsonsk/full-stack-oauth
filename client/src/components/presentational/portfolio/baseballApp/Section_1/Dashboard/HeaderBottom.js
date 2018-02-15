import React from 'react';
import styled from 'styled-components';

const HeaderBottom = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  color: white;
  > * {
  	  border-bottom: solid #212121 1px;
	  &:hover {
		border-bottom: solid #2A6233 1px;
	  }
  }
`;

export { HeaderBottom };
