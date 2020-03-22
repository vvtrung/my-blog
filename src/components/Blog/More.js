import React from 'react';
import styled from 'styled-components';

import Bio from './bio';

const Container = styled.div`
  grid-area: more;
`;

export default () => (
  <Container>
    <Bio />
  </Container>
);
