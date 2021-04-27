import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import ArrowIcon from 'src/assets/images/arrow-right.svg';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import cc from 'classcat';
import {
  card,
  cardActive,
  heading,
  eventDate,
  edgeCircle,
  arrow,
  cImage
} from './styles.module.scss';

const propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.objectOf(PropTypes.object).isRequired,
  link: PropTypes.string
};

const defaultProps = {
  link: '/'
};

const EventCard = ({ title, date, image, link }) => {
  const MotionBox = motion(Box);
  const imageLoaded = getImage(image);

  const variants = {
    default: {
      width: 56,
      height: 56,
      borderRadius: '0px',
      transition: {
        type: 'spring'
      }
    },
    hover: {
      height: 326,
      width: 266,
      borderRadius: '4px',
      transition: {
        type: 'spring',
        stiffness: 600,
        damping: 35
      }
    }
  };

  const cardClasses = cc({
    [card]: true,
    [cardActive]: !!link
  });

  return (
    <Link to={link}>
      <MotionBox className={cardClasses} borderRadius="lg" overflow="hidden" whileHover="hover">
        <GatsbyImage
          className={cImage}
          height={310}
          width={250}
          image={imageLoaded}
          alt=""
          loading="eager"
          layout="cover"
        />
        <Heading className={heading} color="white" size="md">
          {title}
        </Heading>
        <Text className={eventDate} color="white" fontSize="14px">
          {date}
        </Text>
        {!!link && (
          <motion.div className={edgeCircle} variants={variants}>
            <ArrowIcon className={arrow} />
          </motion.div>
        )}
      </MotionBox>
    </Link>
  );
};

EventCard.propTypes = propTypes;
EventCard.defaultProps = defaultProps;

export default EventCard;
