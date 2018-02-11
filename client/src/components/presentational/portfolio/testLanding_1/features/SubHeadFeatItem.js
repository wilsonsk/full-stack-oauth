import React from 'react';
import styled from 'styled-components';

const SubHeadFeatItem = styled.div`
  display: flex;
  @media(min-width: 200px) and (max-width: 768px) {
	font-size: 0.5em;
  }
  
  @media(min-width: 768px) {
	font-size: 0.5em;
  } 

  transition: ${props => props.trans || ''};
  opacity: ${props => props.within ? '1' : '0'};

  border: ${props => props.grid ? 'solid white 1px' : null};
`;

export { SubHeadFeatItem };
