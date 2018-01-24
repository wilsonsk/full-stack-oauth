import React from 'react';
import styled from 'styled-components';

const Header = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  align-items: center;

  @media(max-width: 1000px) {
    grid-template-columns: auto 1fr;
  }
`;

export { Header };
