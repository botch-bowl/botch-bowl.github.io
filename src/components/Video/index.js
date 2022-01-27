import React from 'react';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import PLayButton from 'src/assets/images/play-button.svg';
import { cPreview, cImage, cPlayButton, ytWrapper, videoOverlay } from './styles.module.scss';

const propTypes = {
  youtubeUrl: PropTypes.string.isRequired,
};

const Video = ({ youtubeUrl }) => {
  const [isPlayerOpen, setPlayerOpen] = React.useState(false);

  const playButtonVariants = {
    init: {
      rotate: 0
    },
    hover: {
      rotate: -16
    }
  };

  return (
    <motion.div
      initial="init"
      whileHover="hover"
      animate="init"
      className={cPreview}
      onClick={() => setPlayerOpen(true)}
    >
      <StaticImage className={cImage} src="../../assets/images/video-cover.jpg" alt="" />

      {!isPlayerOpen && (
        <motion.div className={cPlayButton} variants={playButtonVariants}>
          <PLayButton />
        </motion.div>
      )}
      <div className={videoOverlay}>
        {isPlayerOpen && (
          <div className={ytWrapper}>
            <iframe
              width="100%"
              height="auto"
              src={`${youtubeUrl}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

Video.propTypes = propTypes;

export default Video;
