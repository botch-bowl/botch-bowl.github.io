import * as React from 'react';
import Layout from 'src/components/Layout';
import Seo from 'src/components/Seo';
import { Button, Heading } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Heading as="h1" size="xl">
      Hello.
    </Heading>
    <Button>Hello</Button>
    <StaticImage src="../assets/images/unsplash-example.jpg" alt="example" loading="eager" />
  </Layout>
);

export default IndexPage;
