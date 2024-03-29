import * as React from 'react';
import PropTypes from 'prop-types';
import Layout from 'src/components/Layout';
import Seo from 'src/components/Seo';
import EventsSlider from 'src/sections/EventsSlider';
import MembershipPrices from 'src/sections/MembershipPrices';
import Heading from 'src/components/Heading';
import Section from 'src/components/Section';
import Container from 'src/components/Container';
import Video from 'src/components/Video';
import Atf from 'src/components/Atf';
import { Text } from '@chakra-ui/react';
import { graphql } from 'gatsby';

const propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired
};

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Startseite" />
    <Atf />
    <Section id="we-are-botch">
      <Container>
        <Heading pre="Über uns">We are Botch.</Heading>
        <Text>
          <strong>Botch. ist ein DIY Skate Bowl in Kaprun.</strong>
          <br />
          <br />
          Der Bowl ist in den letzten Jahren fertig gestellt worden und wir sind momentan mit dem
          Weiterbau rund um den Bowl beschäftigt.
          <br />
          <br />
          Seit 2020 ist Botch. auch ein Rollsportverein mit schon mehr als 40 Mitgliedern die den
          Weiterbau und den Skatesport unterstützen.
          <br />
          <br />
          Lust auf rollen? Einfach vorbeischauen.
        </Text>
      </Container>
    </Section>

    <EventsSlider data={data} />

    <Section>
      <Container>
        <Heading pre="Episode 2">Pfusch am Bau TV.</Heading>
        <Video youtubeUrl="https://www.youtube.com/embed/aXgnPj1UMNA" />
      </Container>
    </Section>
    <Section>
      <Container>
        <Heading pre="Jahresmitgliedschaften">Mitglied werden.</Heading>
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
        <MembershipPrices withCTA />
      </Container>
    </Section>
  </Layout>
);

export const query = graphql`
  query HomeQuery {
    allFile(filter: { relativeDirectory: { eq: "events/2022" } }) {
      nodes {
        childImageSharp {
          gatsbyImageData(width: 250, height: 310, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  }
`;

IndexPage.propTypes = propTypes;

export default IndexPage;
