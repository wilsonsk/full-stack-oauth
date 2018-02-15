import React from 'react';
import styled from 'styled-components';

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-template-rows: repeat(auto-fill, 200px);
  grid-gap: 0.5em;
  justify-content: center;

`;

export { ContentGrid };
