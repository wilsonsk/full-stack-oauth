import React from 'react';
import styled from 'styled-components';

const NavbarHeaderMenuItem = styled.li`
  text-decoration: none;
  color: white;
  font-size: 17px;
  &:hover {
    border-bottom: 4px solid white;
    transition: border-bottom 0.2s, color 0.1s;	  
  }

`;

export { NavbarHeaderMenuItem };
