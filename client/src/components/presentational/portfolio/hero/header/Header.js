import React from 'react';
import styled from 'styled-components';

const Header = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  @media(max-width: 1000px) {
    grid-template-columns: auto 1fr;
  }
`;

export { Header };
