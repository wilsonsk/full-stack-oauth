import React from 'react';
import styled from 'styled-components';

const CtaLink = styled.div`
  grid-area: link;
  background-color: #3D1E37;
  color: #EFF5D9;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8em;
  height: 3em;
  text-align: center;
  border-radius: 50px;
  font-size: 12pt;
  border: ${props => props.grid ? 'solid white 1px' : 'solid #3D1E37 1px'};
  box-shadow: 3px 3px 10px #3D1E37;

  @media(min-width: 200px) and (max-width: 420px) {
	justify-self: center;
	font-size: 9pt;
  }

  &:hover {
	border: solid white 1px;
	transition: border 0s;
  }

  &:active {
	box-shadow: 0px 0px 0px;
	transition: box-shadow 0s;
	transform: translateY(4px);
  }

`;

export { CtaLink };
