import * as React from 'react';
import cc from 'classcat';
import PropTypes from 'prop-types';
import { heading, sm, md, lg } from './styles.module.scss';

const Heading = ({ as: Component = 'h1', size, color, className, children, ...props }) => {
  const headingClasses = cc({
    [heading]: true,
    [sm]: size === 'sm',
    [md]: size === 'md',
    [lg]: size === 'lg',
    [className]: !!className
  });

  const headingStyle = { color };

  return (
    <Component className={headingClasses} style={headingStyle} {...props}>
      {children}
    </Component>
  );
};

Heading.propTypes = {
  as: PropTypes.elementType,
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

Heading.defaultProps = {
  as: 'h1',
  size: 'lg',
  color: undefined,
  className: undefined
};

export default Heading;
