import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  grid-area: Header;
  display: grid;
  grid-template-columns: [start] 1fr [mid] minmax(auto, 1fr) [end];
  grid-template-rows: auto;

  @media(max-width: 768px) {
	  grid-template-columns: [start] 1fr [end];
	  grid-template-rows: auto;
  }

  > * {
    border: solid black 1px;
  }
`;


export { Header };
