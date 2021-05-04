import * as React from 'react';
import Layout from 'src/components/Layout';
import Section from 'src/components/Section';
import Container from 'src/components/Container';
import Heading from 'src/components/Heading';
import { Text } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from 'src/components/Seo';
import {
  cLink,
  cQr,
  cSection,
} from './imprint.module.scss';

const ImprintPage = () => (
  <Layout>
    <Seo title="Impressum" />
    <Section className={cSection}>
      <Container>
        <Heading>
          Impressum
        </Heading>
        <Text>
          <strong>Botch Bowl Rollsportverein</strong>
          <br />
          Nikolaus-Gassner-Straße 44
          <br />
          5710 Kaprun
        </Text>
        <a href="mail-to:hello@botch-bowl.com" className={cLink}>hello@botch-bowl.com</a>
        <a href="tel:00436769128609" className={cLink}>+43 676 9128609</a>
      </Container>
    </Section>
    <Section className={cSection}>
      <Container>
        <Heading>
          Bankverbindung
        </Heading>
        <Text>
          <strong>Kontoinhaber: </strong>
          Botch Bowl Rollsportverein
          <br />
          <strong>Iban: </strong>
          AT29 2040 4000 4267 3327
          <br />
          <strong>BIC: </strong>
          SBGSAT2SXXX
          <br />
          <br />
          Überweisung mittels QR Code:
        </Text>
        <StaticImage src="../assets/images/bank-qr.png" alt="" className={cQr} />
      </Container>
    </Section>
    <Section className={cSection}>
      <Container>
        <Heading>
          Inhalte
        </Heading>
        <Text>
          <strong>Für den Inhalt verantwortlich: </strong>
          Botch Bowl Rollsportverein
          <br />
          <strong>Rechtsform: </strong>
          Verein im Sinne des Vereingesetzs 2002
          <br />
          <strong>Post Adresse: </strong>
          Nikolaus-Gassner-Straße 44, 5710 Kaprun
          <br />
          <strong>ZVR: </strong>
          1656812341
        </Text>
      </Container>
    </Section>
    <Section className={cSection}>
      <Container>
        <Heading>
          Fotos & Videos
        </Heading>
        <Text>
          Alle Fotos und Videos, welche auf dieser Website verwendet werden,
          sind sofern nicht anders angegeben, Eigentum vom Verein Botch Bowl
          und dürfen ohne unsere Zustimmung nicht verwendet werden.
        </Text>
      </Container>
    </Section>
  </Layout>
);

export default ImprintPage;
