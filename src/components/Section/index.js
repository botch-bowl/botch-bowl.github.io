import * as React from 'react';
import PropTypes from 'prop-types';
import cc from 'classcat';
import { cSection, cPaddingSmall } from './styles.module.scss';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  paddingSmall: PropTypes.bool
};

const defaultProps = {
  className: '',
  paddingSmall: false
};

const Section = ({ children, className, paddingSmall, ...props }) => {
  const SectionClasses = cc({
    [cSection]: true,
    [cPaddingSmall]: paddingSmall,
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
