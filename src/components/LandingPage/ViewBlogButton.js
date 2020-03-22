import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { responsible } from '../../styles/mixins';

const Button = styled(Link)`
  ${responsible}
  background: white;
  border-radius: 3em;
  color: black;
  padding: 16px 30px;
  font-size: 1.2rem;
  font-weight: 600;
  &:hover {
    color: black;
  }
`;

export default () => (
  <Button to="/blogs">
    VIEW MY BLOGS
  </Button>
);
