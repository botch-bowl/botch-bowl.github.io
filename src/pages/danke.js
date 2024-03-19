import * as React from 'react';
import Layout from 'src/components/Layout';
import Section from 'src/components/Section';
import Container from 'src/components/Container';
import Heading from 'src/components/Heading';
import { Button } from '@chakra-ui/react';
import { navigate } from 'gatsby';
import Seo from 'src/components/Seo';
import { cContainer } from './thankyou.module.scss';

const ThankYouPage = () => (
  <Layout>
    <Seo title="Danke" noindex />
    <Section>
      <Container className={cContainer}>
        <Heading pre="Hell yeah">Danke für deine Anmeldung!</Heading>
        <Button onClick={() => navigate('/')} variant="brand">
          Zurück zur Startseite
        </Button>
      </Container>
    </Section>
  </Layout>
);

export default ThankYouPage;
