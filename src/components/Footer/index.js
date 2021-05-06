import React from 'react';
import Container from 'src/components/Container';
import { Link } from 'gatsby';
import Brand from 'src/assets/images/botch-white.svg';
import Instagram from 'src/assets/images/instagram.svg';
import Mail from 'src/assets/images/mail.svg';
import { Text } from '@chakra-ui/react';
import FooterLine from 'src/assets/images/footer-line-2.svg';
import { motion } from 'framer-motion';
import { isBrowser } from 'react-device-detect';
import {
  cFooterLine,
  cFooter,
  cContainer,
  cBrand,
  cSubBrand,
  cMenu,
  cLinkImpressum,
  cLinkText,
  cIconLinkMail,
  cIcon,
  cIconLinkInstagram,
  cLinkDatenschutz
} from './styles.module.scss';

const Footer = () => (
  <>
    <FooterLine className={cFooterLine} />
    <footer className={cFooter}>
      <Container className={cContainer}>
        <div>
          <Brand className={cBrand} />
          <Text className={cSubBrand}>Bowl Rollsportverein</Text>
        </div>
        <div className={cMenu}>
          <Link to="/impressum/" className={cLinkImpressum}>
            <Text className={cLinkText}>Impressum</Text>
          </Link>
          <motion.a
            href="mailto:hello@botch-bowl.com"
            className={cIconLinkMail}
            initial={{ rotate: 0 }}
            whileHover={{ rotate: -16 }}
            aria-label="mail"
          >
            <Mail className={cIcon} alt="E-Mail Icon" />
          </motion.a>
          <motion.a
            href={isBrowser ? 'https://www.instagram.com/botchbowl/' : 'instagram://instagram.com/botchbowl/'}
            target="_blank"
            rel="noreferrer"
            className={cIconLinkInstagram}
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 16 }}
            aria-label="instagram"
          >
            <Instagram className={cIcon} alt="Instagram Logo" />
          </motion.a>
          <Link to="/datenschutz/" className={cLinkDatenschutz}>
            <Text className={cLinkText}>Datenschutz</Text>
          </Link>
        </div>
      </Container>
    </footer>
  </>
);

export default Footer;
