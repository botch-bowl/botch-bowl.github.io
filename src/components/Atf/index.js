import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Container from 'src/components/Container';
import Heading from 'src/components/Heading';
import Indicator from 'src/assets/images/scroll-indicator.svg';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { useViewportScroll, motion, useTransform } from 'framer-motion';
import {
  cAtf,
  cHeadingWrapper,
  cHeading,
  cImg,
  cImage1,
  cImage2,
  cImage3,
  cImage4,
  cImage5,
  cImage6,
  cLinkWrapper,
  cLink,
  cIndicator,
  cBorderRadius
} from './styles.module.scss';

const Atf = () => {
  const { scrollY } = useViewportScroll();
  const xSpeed0 = useTransform(scrollY, (value) => value * 1.65);
  const xSpeed1 = useTransform(scrollY, (value) => value * 1.55);
  const xSpeed2 = useTransform(scrollY, (value) => value * 1.45);
  const xSpeed3 = useTransform(scrollY, (value) => value * 1.35);
  const xSpeed4 = useTransform(scrollY, (value) => value * 1.25);
  const xSpeed5 = useTransform(scrollY, (value) => value * 1.15);
  const xSpeed6 = useTransform(scrollY, (value) => value * 1.05);
  const opacity = useTransform(scrollY, [1000, 1220], [1, 0]);
  const indicatorOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <Container id="atf">
      <div className={cAtf}>
        <motion.div className={cHeadingWrapper} style={{ x: xSpeed0, opacity }}>
          <Heading className={cHeading} pre="DIY Bowl und Skateverein" isLarge>
            Never stop going sideways.
          </Heading>
        </motion.div>
        <motion.div className={cImage1} style={{ x: xSpeed1, opacity }}>
          <StaticImage className={cImg} imgClassName={cBorderRadius} src="../../assets/images/atf/meidl.jpg" alt="Fs Smith" />
        </motion.div>
        <motion.div className={cImage2} style={{ x: xSpeed2, opacity }}>
          <StaticImage className={cImg} imgClassName={cBorderRadius} src="../../assets/images/atf/botch.jpg" alt="Pfusch" />
        </motion.div>
        <motion.div className={cImage3} style={{ x: xSpeed3, opacity }}>
          <StaticImage className={cImg} imgClassName={cBorderRadius} src="../../assets/images/atf/mima.jpg" alt="Mischmaschin" />
        </motion.div>
        <motion.div className={cImage4} style={{ x: xSpeed4, opacity }}>
          <StaticImage className={cImg} imgClassName={cBorderRadius} src="../../assets/images/atf/feufeu.jpg" alt="Feia" />
        </motion.div>
        <motion.div className={cImage5} style={{ x: xSpeed5, opacity }}>
          <StaticImage className={cImg} imgClassName={cBorderRadius} src="../../assets/images/atf/bier.jpg" alt="Bier" />
        </motion.div>
        <motion.div className={cImage6} style={{ x: xSpeed6, opacity }}>
          <StaticImage className={cImg} imgClassName={cBorderRadius} src="../../assets/images/atf/fa-2.jpg" alt="Firmenauto" />
        </motion.div>

        <AnchorLink to="/#we-are-botch">
          <motion.div
            className={cLinkWrapper}
            style={{ opacity: indicatorOpacity }}
            initial="init"
            whileHover="hover"
            animate="init"
          >
            <motion.div
              variants={{
                init: { rotate: 0 },
                hover: { rotate: -16 }
              }}
            >
              <Indicator className={cIndicator} />
            </motion.div>
            <p className={cLink}>Über uns</p>
          </motion.div>
        </AnchorLink>
      </div>
    </Container>
  );
};

export default Atf;
