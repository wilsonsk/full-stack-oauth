import React from 'react';
import styled from 'styled-components';

const HireMeButton = styled.button`
  grid-area: HireMeButton;
  background-color: ${props => props.cta2 ? '#A2C9D3' : '#303235'};
  border-radius: 50%;
  color: white;
  
`;


export { HireMeButton };
