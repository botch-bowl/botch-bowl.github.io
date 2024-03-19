import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'src/components/Base';
import classNames from 'classnames';
import styles from './styles.module.scss';

const Section = ({ children, background }) => {
  const sectionClasses = classNames({
    [styles.section]: true,
    [styles.background]: background
  });

  return (
    <section className={sectionClasses}>
      <Container>{children}</Container>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.bool
};

Section.propTypes = {
  background: false
};

export default Section;
