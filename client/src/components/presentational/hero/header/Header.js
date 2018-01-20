import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  border: solid black 1px;

  @media(max-width: 1000px) {
    grid-template-columns: auto 1fr;
  }
`;

export { Header };
