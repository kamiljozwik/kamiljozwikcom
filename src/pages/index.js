import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
import { GatsbyImage } from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`kamil`, `jozwik`, `react`]} />
    <h1>Coming soon...</h1>
    <div>
      {/* <GatsbyImage /> */}
    </div>
  </Layout>
);

export default IndexPage;
