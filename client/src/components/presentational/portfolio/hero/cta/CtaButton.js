import React from 'react';
import styled from 'styled-components';

const CtaButton = styled.div`
  padding: 5% 5%;
  background: #282828;
  color: white;
  width: 50%;
  justify-self: center;
  text-decoration: none;
  border-radius: 50px;
  font-size: 28px;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  &:hover {
    background: #383737;
    transition: 0.3s;
  }
`;

export { CtaButton };
