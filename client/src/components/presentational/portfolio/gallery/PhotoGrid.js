import React from 'react';
import styled from 'styled-components';

const PhotoGrid = styled.div`
  border: solid black 5px;

// Grid Settings
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px,1fr));
  grid-template-rows: 50px;
  grid-gap: 10%;
`;

export { PhotoGrid };
