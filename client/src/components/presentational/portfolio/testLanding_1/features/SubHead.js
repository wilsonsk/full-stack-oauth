import React from 'react'; 
import styled from 'styled-components';

const SubHead = styled.div`
  display: flex;

  border: ${props => props.grid ? 'solid white 1px' : null};

`;

export { SubHead };
