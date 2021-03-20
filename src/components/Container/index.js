import * as React from 'react';
import PropTypes from 'prop-types';
import cc from 'classcat';
import { container, cOpenRight } from './styles.module.scss';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  openRight: PropTypes.bool
};

const defaultProps = {
  className: '',
  openRight: false
};

const Container = ({ children, className, openRight, ...props }) => {
  const containerClasses = cc({
    [container]: !openRight,
    [cOpenRight]: openRight,
    [className]: !!className
  });

  return (
    <div className={containerClasses} {...props}>
      {children}
    </div>
  );
};

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;
