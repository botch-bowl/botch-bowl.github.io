import * as React from 'react';
import PropTypes from 'prop-types';
import cc from 'classcat';
import { section } from './styles.module.scss';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

const defaultProps = {
  className: ''
};

const Section = ({ children, className, ...props }) => {
  const SectionClasses = cc({
    [section]: true,
    [className]: !!className
  });

  return (
    <section className={SectionClasses} {...props}>
      {children}
    </section>
  );
};

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;

export default Section;
