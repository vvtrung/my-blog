import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import More from './More';
import SEO from '../seo';

const Layout = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 69px auto;
  grid-template-columns: 4fr 2fr;
  grid-template-areas:
  "header header"
  "main more";
  transition: all 0.5s ease-out;
  background: #F7F7F7;
`;

export default ({ children }) => (
  <Layout>
    <SEO
      title="Blog"
      keywords={['blog', 'trungvvblog', 'trungvv']}
    />
    <Header />
    {children}
    <More />
  </Layout>
);
