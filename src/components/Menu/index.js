import * as React from 'react';
import PropTypes from 'prop-types';
import Brand from 'src/assets/images/botch.svg';
import Close from 'src/assets/images/close.svg';
import Container from 'src/components/Container';
import { motion } from 'framer-motion';
import { menu, header, container, brand, closeButton } from './styles.module.scss';

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
    </motion.div>
  );
};

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;

export default Menu;
