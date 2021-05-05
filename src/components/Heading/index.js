import * as React from 'react';
import PropTypes from 'prop-types';
import cc from 'classcat';
import { Heading, Text } from '@chakra-ui/react';
import { cHeading, cHeadingLarge, cPre, cPost, cWrapper, cLastChar } from './styles.module.scss';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  pre: PropTypes.string,
  post: PropTypes.string,
  size: PropTypes.string,
  isLarge: PropTypes.bool,
  as: PropTypes.string
};

const defaultProps = {
  className: '',
  pre: undefined,
  post: undefined,
  size: '2xl',
  isLarge: false,
  as: 'h2'
};

const BotchHeading = ({ children, pre, post, className, size, isLarge, as }) => {
  const headingClasses = cc({
    [cHeading]: true,
    [cHeadingLarge]: isLarge,
    [className]: !!className
  });

  return (
    <div className={cWrapper}>
      {!!pre && <Text className={cPre}>{pre}</Text>}
      <Heading className={headingClasses} size={size} as={as}>
        {children.substring(0, children.length - 1)}
        <span className={cLastChar}>
          {children.substring(children.length - 1, children.length)}
        </span>
      </Heading>
      {!!post && <Text className={cPost}>{post}</Text>}
    </div>
  );
};

BotchHeading.propTypes = propTypes;
BotchHeading.defaultProps = defaultProps;

export default BotchHeading;
