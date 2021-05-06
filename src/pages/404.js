import * as React from 'react';
import Layout from 'src/components/Layout';
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
    console.log('click');
    setRandNum(generateRandomNum(0, 1));
  };

  return (
    <Layout>
      <Seo title="404: Not found" noindex />
      <Container className={cContainer}>
        <Heading pre="404">
          Not found
        </Heading>
        {randNum === 0 && (
          <StaticImage className={cImg} onClick={() => handleGeneration()} src="../assets/images/atf/meidl.jpg" alt="Fs Smith" />
        )}
        {randNum === 1 && (
          <StaticImage className={cImg} onClick={() => handleGeneration()} src="../assets/images/atf/bowl.jpg" alt="Fs Smith" />
        )}
        <Button onClick={() => navigate('/')} variant="brand">
          Zur Startseite
        </Button>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
