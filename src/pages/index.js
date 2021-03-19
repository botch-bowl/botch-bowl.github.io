import * as React from 'react';
import Layout from 'src/components/Layout';
import Seo from 'src/components/Seo';
import Heading from 'src/components/Heading';
import { Button } from '@chakra-ui/react';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Heading>Hello.</Heading>
    <Button>Hello</Button>
  </Layout>
);

export default IndexPage;
