import React from 'react';
import styled from 'styled-components';

const WrapperGrid = styled.div`
  display: grid;

  @media(min-width: 200px) and (max-width: 388px) {
	grid-template-rows: 35vh;
  }

  @media(min-width: 420px) and (max-width: 768px) {
	padding-left: 10%;
  }

  @media(min-width: 768px) and (max-width: 1210px) {
	display: grid;
	grid-template-columns: 1fr 3fr 0.5fr;
	grid-template-areas:
		"left-space main .";
  }

  @media(min-width: 1210px) {
	grid-template-columns: 1fr 3fr 1fr;
	grid-template-areas:
		"left-space main .";
  }

  border: ${props => props.grid ? 'solid white 1px' : null};
`;

export { WrapperGrid };
