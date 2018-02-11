import React from 'react';
import styled from 'styled-components';

const ParallaxObj = styled.div`
  position ${props =>props.within ? 'fixed' : 'relative'};
  top: ${props => props.within ? props.parallax :  ''};


`;

export { ParallaxObj };
