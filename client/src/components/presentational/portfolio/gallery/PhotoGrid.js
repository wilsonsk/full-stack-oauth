import React from 'react';
import styled from 'styled-components';

const PhotoGrid = styled.div`
  border: solid black 5px;


// Grid Settings
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px,1fr));
  grid-auto-rows: repeat(auto-fill, 200px);
  grid-gap: 1%;
`;

export { PhotoGrid };
