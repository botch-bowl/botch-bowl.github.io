import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styles from './styles.module.scss';

const Button = ({ children, type, to }) => {
  switch (type) {
    case 'internal-link':
      return (
        <Link to={to} className={styles.button}>
          {children}
        </Link>
      );
    case 'external-link':
      return (
        <Link to={to} className={styles.button}>
          {children}
        </Link>
      );
    default:
      return <a className={styles.button}>{children}</a>;
  }
};

Button.PropTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  type: PropTypes.string
};

Button.defaultProps = {
  type: ''
};

export default Button;
