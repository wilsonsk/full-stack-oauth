import React from 'react';
import styled from 'styled-components';

const FooterPostItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 4fr;
  align-content: start;
  font-size: 15px;
  line-height: 20px;
  margin-bottom: 15px;
  align-items: center;
  width: 40%;

  > img {
    margin-right: 20px;
	  
  }
`;

export { FooterPostItem };
