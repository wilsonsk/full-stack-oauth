import React from 'react';
import styled from 'styled-components';

const IphoneButton = styled.img`
  margin-bottom: -240px;
  width: 100%;
  animation: ${props => props.iphoneButton_animation ? 'slideUp 3s ease-out forwards, fadeIn 1.5s forwards' : ''};
  grid-row: ${props => props.inphoneButton_animation ? 1 : ''};
  grid-column: ${props => props.inphoneButton_animation ? 2 : ''};  
`;

export { IphoneButton };
