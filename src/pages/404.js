import * as React from 'react';
import Layout from 'src/components/Layout';
import Section from 'src/components/Section';
import Container from 'src/components/Container';
import Heading from 'src/components/Heading';
import { StaticImage } from 'gatsby-plugin-image';
import { Button } from '@chakra-ui/react';
import { navigate } from 'gatsby';
import Seo from 'src/components/Seo';
import { cContainer, cImg } from './404.module.scss';

const NotFoundPage = () => {
  const generateRandomNum = (min, max) => {
    const minC = Math.ceil(min);
    const maxF = Math.floor(max);
    return Math.floor(Math.random() * (maxF - minC + 1) + minC);
  };

  const [randNum, setRandNum] = React.useState(generateRandomNum(0, 1));

  const handleGeneration = () => {
    setRandNum(generateRandomNum(0, 2));
    console.log(randNum);
  };

  return (
    <Layout>
      <Seo title="404: Not found" noindex />
      <Section>
        <Container className={cContainer}>
          <Heading pre="404">
            Not found
          </Heading>
          {randNum === 0 && (
            <StaticImage className={cImg} onClick={() => handleGeneration()} src="../assets/images/404/404-1@2x.jpg" alt="Fs Smith" />
          )}
          {randNum === 1 && (
            <StaticImage className={cImg} onClick={() => handleGeneration()} src="../assets/images/404/404-2@2x.jpg" alt="Fs Smith" />
          )}
          {randNum === 2 && (
            <StaticImage className={cImg} onClick={() => handleGeneration()} src="../assets/images/404/404-3@2x.jpg" alt="Fs Smith" />
          )}
          <Button onClick={() => navigate('/')} variant="brand">
            Zur Startseite
          </Button>
        </Container>
      </Section>
    </Layout>
  );
};

export default NotFoundPage;
