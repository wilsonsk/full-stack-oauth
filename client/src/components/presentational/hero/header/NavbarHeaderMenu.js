import React from 'react';
import styled from 'styled-components';

const NavbarHeaderMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-template-rows: minmax(75px, auto);
  list-style-type: none;
  grid-gap: 5%;

  @media(max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, auto);
    grid-gap: 2%;
  }
`;

export { NavbarHeaderMenu };
