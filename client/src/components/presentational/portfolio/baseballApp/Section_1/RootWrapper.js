import React from 'react';
import styled from 'styled-components';

const RootWrapper = styled.section`
  letter-spacing: -1.5px;
  background-color: ${props => props.grid ? '' : '#3B560F'};
  height: 100vh;
  font-family: 'Source Sans Pro', sans-serif;
  color: white;

`;

export { RootWrapper };
