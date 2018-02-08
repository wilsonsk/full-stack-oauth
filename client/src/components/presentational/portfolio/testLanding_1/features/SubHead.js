import React from 'react'; 
import styled from 'styled-components';

const SubHead = styled.h4`
  margin: 0;

  @media(min-width: 200px) and (max-width: 768px) {
	font-size: 0.5em;
  }

  border: ${props => props.grid ? 'solid white 1px' : null};

`;

export { SubHead };
