import React from 'react';
import styled from 'styled-components';

const Section_1 = styled.section`
  background-color: ${props => props.grid ? '#F55224' : '#df1b33'};
  font-family: 'Source Sans Pro', sans-serif;
  color: ${props => props.grid ? 'black' : '#3D1E37'};
`;

export { Section_1 };
