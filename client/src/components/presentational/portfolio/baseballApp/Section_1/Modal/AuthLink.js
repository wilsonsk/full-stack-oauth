import React from 'react';
import styled from 'styled-components';

const AuthLink = styled.a`
  text-decoration: none;
  color: white;
  text-align: center;
  background-color: blue;
  border-radius: 50px;
  display:flex;
  align-items: center;
  box-shadow: 2px 2px 2px black;

  &:hover {
	border: solid white 1px;
  }

  &:active {
	  transform: translateY(5px);
  }
`;

export { AuthLink };
