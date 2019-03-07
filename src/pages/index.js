import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
import Landing from '../components/Landing';
import Temp from '../components/Temp';
// import { GatsbyImage } from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`kamil`, `jozwik`, `react`]} />
    <Temp />
    { /* TODO OTHER SECTIONS */ }
  </Layout>
);

export default IndexPage;
