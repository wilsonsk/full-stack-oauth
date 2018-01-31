import React from 'react';
import styled from 'styled-components';

const Photo = styled.img`
  border-radius: 10px;
  box-shadow: 0 0 7px #333;
  transform: scale3d(1, 1, 1);

  &:hover {
	  z-index: 1;
	            transition: all 0.4s linear;
          transform: scale3d(1.2, 1.2, 1);

  }

  @media (max-width: 500px) {
	width: 90vw;
  }
  @media (min-width: 768px) {
	width: 45vw;
  }
  @media (min-width: 1024px) {
	width: 30vw;
  }
  @media (min-width: 1900px) {
	width: 20vw;
  }
`;

export { Photo };
