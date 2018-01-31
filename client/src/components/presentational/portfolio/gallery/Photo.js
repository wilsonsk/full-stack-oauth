import React from 'react';
import styled from 'styled-components';

const Photo = styled.img`
  border-radius: 10px;
  box-shadow: 0 0 7px #333;
  @media (max-width: 500px) {
	width: 90vw;
  }
  @media (min-width: 768px) {
	width: 47vw;
  }
  @media (min-width: 1023px) {
	width: 30.5vw;
  }
`;

export { Photo };
