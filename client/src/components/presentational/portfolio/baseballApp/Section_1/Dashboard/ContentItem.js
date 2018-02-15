import React from 'react';
import styled from 'styled-components';

const ContentItem = styled.div`
  display: grid;
  color: white;
  font-size: 1em;
  background-image: linear-gradient(rgba(79, 79, 79, 0.6), rgba(79, 79, 79, 0.6)), url('https://i.imgur.com/4xQfzkB.jpg');
  background-repeat: no-repeat;
  background-size: 400px 200px;
  box-shadow: 2px 2px 2px black;
   > * {
	text-decoration: none;
	color: white;
   }

  &:hover {
	background-image: linear-gradient(rgba(26, 106, 37, 0.6), rgba(26, 106, 37, 0.6)), url('https://i.imgur.com/4xQfzkB.jpg');

  }

`;

export { ContentItem };
