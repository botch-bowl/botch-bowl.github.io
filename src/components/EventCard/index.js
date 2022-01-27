import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import ArrowIcon from 'src/assets/images/arrow-right-2.svg';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
// import { Link } from 'gatsby';
import cc from 'classcat';
import {
  card,
  cardActive,
  heading,
  eventDate,
  arrow,
  cImage,
  cBackground
} from './styles.module.scss';

const propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.objectOf(PropTypes.object).isRequired,
  link: PropTypes.string
};

const defaultProps = {
  link: null
};

const EventCard = ({ title, date, image, link }) => {
  const MotionBox = motion(Box);
  console.log(image);
  const imageLoaded = getImage(image);

  const cardClasses = cc({
    [card]: true,
    [cardActive]: !!link
  });

  const variants = {
    default: {
      scaleY: 1,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 100
      }
    },
    hover: {
      scaleY: 5,
      transition: {
        type: 'spring',
        stiffness: 600,
        damping: 60
      }
    }
  };

  return (
    <div>
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
        <motion.svg variants={variants} className={cBackground} xmlns="http://www.w3.org/2000/svg" width="301.661" height="161.838" viewBox="0 0 301.661 161.838">
          <path d="M534.682,1467.948s40.676-7.053,96.052-5.693,88.406,1.214,118.021,5.693,87.589,0,87.589,0v155.971H534.682Z" transform="translate(-534.682 -1462.081)" fill="#e88661" />
        </motion.svg>
        <Heading className={heading} color="white" size="md">
          {title}
        </Heading>
        <Text className={eventDate} color="white" fontSize="14px">
          {date}
        </Text>
        {!!link && (
          <ArrowIcon className={arrow} />
        )}
      </MotionBox>
    </div>
  );
};

EventCard.propTypes = propTypes;
EventCard.defaultProps = defaultProps;

export default EventCard;
