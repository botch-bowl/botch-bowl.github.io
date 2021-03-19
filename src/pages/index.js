import * as React from 'react';
import Layout from 'src/components/Layout';
import Seo from 'src/components/Seo';
import Heading from 'src/components/Heading';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Heading>Hello.</Heading>
  </Layout>
);

export default IndexPage;
