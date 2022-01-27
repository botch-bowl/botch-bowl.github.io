import * as React from 'react';
import PropTypes from 'prop-types';
import Container from 'src/components/Container';
import { motion } from 'framer-motion';
import ArrowIcon from 'src/assets/images/scroll-indicator.svg';
import Slider from 'react-slick';
import cc from 'classcat';
import {
  buttonContainer,
  arrowPrev,
  arrowPrevDisabled,
  arrowNextDisabled,
  arrowNext
} from './styles.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const propTypes = {
  children: PropTypes.node.isRequired
};

const MySlider = ({ children }) => {
  // useRef is not supported by react-slick, need to use a state
  const [sliderRef, setSliderRef] = React.useState(null);
  const [isPrevDisabled, setPrevDisabled] = React.useState(true);
  const [isNextDisabled, setNextDisabled] = React.useState(false);

  const updateButtons = (next) => {
    if (next < 1) {
      setPrevDisabled(true);
    } else {
      setPrevDisabled(false);
    }
    if (next >= sliderRef.props.children.length - 1) {
      setNextDisabled(true);
    } else {
      setNextDisabled(false);
    }
  };

  const next = () => {
    sliderRef.slickNext();
  };

  const prev = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    useTransform: false,
    beforeChange: (currentSlide, nextSlide) => updateButtons(nextSlide)
  };

  const prevButtonClasses = cc({
    [arrowPrev]: true,
    [arrowPrevDisabled]: isPrevDisabled
  });

  const nextButtonClasses = cc({
    [arrowNext]: true,
    [arrowNextDisabled]: isNextDisabled
  });

  return (
    <div>
      <Container openRight>
        <Slider ref={(c) => setSliderRef(c)} {...settings}>
          {children}
        </Slider>
      </Container>
      {!(isPrevDisabled && isNextDisabled) && (
        <Container className={buttonContainer}>
          <motion.div initial={{ rotate: 90 }} whileHover={{ rotate: 74 }} onClick={prev}>
            <div>
              <ArrowIcon className={prevButtonClasses} />
            </div>
          </motion.div>
          <motion.div initial={{ rotate: -90 }} whileHover={{ rotate: -74 }} onClick={next}>
            <ArrowIcon className={nextButtonClasses} />
          </motion.div>
        </Container>
      )}
    </div>
  );
};

MySlider.propTypes = propTypes;

export default MySlider;
