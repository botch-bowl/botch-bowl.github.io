import * as React from 'react';
import PropTypes from 'prop-types';
import Brand from 'src/assets/images/botch.svg';
import Close from 'src/assets/images/close.svg';
import Container from 'src/components/Container';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { isBrowser } from 'react-device-detect';
import Instagram from 'src/assets/images/instagram-dark.svg';
import Mail from 'src/assets/images/mail-dark.svg';
import {
  menu,
  header,
  container,
  brand,
  closeButton,
  cBody,
  cNav,
  cLink,
  cLinkActive,
  cIconLinkMail,
  cIconLinkInstagram,
  cIcon,
  cIconWrapper,
} from './styles.module.scss';

const propTypes = {
  isOpen: PropTypes.bool,
  toggleMenu: PropTypes.func.isRequired
};

const defaultProps = {
  isOpen: false
};

const Menu = ({ isOpen, toggleMenu }) => {
  const variants = {
    closed: {
      opacity: 0,
      transitionEnd: {
        display: 'none'
      }
    },
    open: {
      opacity: 1,
      display: 'block'
    }
  };

  const closeVariants = {
    init: {
      rotate: 0
    },
    hover: {
      rotate: -12
    }
  };

  return (
    <motion.div
      className={menu}
      initial="closed"
      variants={variants}
      animate={isOpen ? 'open' : 'closed'}
    >
      <div className={header}>
        <Container className={container}>
          <div className={brand}>
            <Brand />
          </div>
          <motion.div
            className={closeButton}
            initial="init"
            whileHover="hover"
            animate="init"
            onClick={toggleMenu}
          >
            <motion.div variants={closeVariants}>
              <Close />
            </motion.div>
          </motion.div>
        </Container>
      </div>
      <div className={cBody}>
        <Container className={cNav}>
          <Link to="/" className={cLink} activeClassName={cLinkActive}>
            Startseite
          </Link>
          <Link to="/mitgliedschaft/" className={cLink} activeClassName={cLinkActive}>
            Mitgliedschaft
          </Link>
          <div className={cIconWrapper}>
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
          </div>
        </Container>
      </div>
    </motion.div>
  );
};

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;

export default Menu;
