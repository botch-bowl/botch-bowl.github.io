import * as React from 'react';
import Layout from 'src/components/Layout';
import Section from 'src/components/Section';
import Container from 'src/components/Container';
import MembershipForm from 'src/sections/MembershipForm';
import MembershipPrices from 'src/sections/MembershipPrices';
import Heading from 'src/components/Heading';
import { Text } from '@chakra-ui/react';
import Seo from 'src/components/Seo';

const MembershipPage = () => (
  <Layout>
    <Seo title="Mitgliedschaft" />
    <Section paddingSmall>
      <Container>
        <Heading pre="Jahresmitgliedschaft">Jetzt Mitglied werden.</Heading>
        <Text>
          <strong>Werde Botch Vereinsmitglied und unterstütze den Weiterbau.</strong>
          <br />
          <br />
          Natürlich darfst du als Mitglied das ganze Jahr zu den Öffnungszeiten (Mo-So, 10:00-22:00)
          Skaten.
          <br />
          <br />
          Außerdem bekommst du ein exklusives Botch T-Shirt als kleines Dankeschön (solange der
          Vorrat reicht).
        </Text>
        <MembershipPrices />
      </Container>
    </Section>
    <MembershipForm />
  </Layout>
);

export default MembershipPage;
