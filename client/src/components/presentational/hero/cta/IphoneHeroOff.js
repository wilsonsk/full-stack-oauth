import React from 'react';
import styled from 'styled-components';

const IphoneHeroOff = styled.div`
  opacity: 0;
  margin-bottom: -240px;
  width: 100%;

animation: ${props => props.iphoneOff_animation ? 'slideUp 3s ease-out forwards, fadeIn 1.5s forwards' : ''};
  grid-row: 1;
  grid-column: 2;
`;

export { IphoneHeroOff };
