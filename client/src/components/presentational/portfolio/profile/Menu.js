import React from 'react';
import styled from 'styled-components';

const Menu = styled.div`
  border: solid black 1px;
  grid-column: start;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;

  > * {
    font-size: 12px;
  }
`;


export { Menu };
