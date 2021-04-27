import * as React from 'react';
import Brand from 'src/assets/images/botch.svg';
import Container from 'src/components/Container';
import Menu from 'src/components/Menu';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { header, brand, container, hamburger, burgerIcon } from './styles.module.scss';

const Header = () => {
  const [isMenuOpen, setMenu] = React.useState(false);

  const burgerVariants = {
    closed: {
      pathLength: 0.65,
      pathOffset: 0.35
    },
    hover: {
      pathLength: 1,
      pathOffset: 0
    }
  };

  const toggleMenu = () => {
    setMenu(!isMenuOpen);
  };

  return (
    <header className={header}>
      <Container className={container}>
        <Link to="/" aria-label="home">
          <div className={brand}>
            <Brand />
          </div>
        </Link>
        <motion.div
          className={hamburger}
          initial="closed"
          whileHover="hover"
          animate="closed"
          onClick={toggleMenu}
        >
          <svg
            className={burgerIcon}
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="16"
            viewBox="0 0 22 16"
          >
            <g transform="translate(-520.889 326.011)">
              <path
                d="M325.5-324.152a48.145,48.145,0,0,1,5.994-.015c3.508.192,4.219.052,8.336.015s5.671-.015,5.671-.015"
                transform="translate(196.5 -0.751)"
                fill="none"
                stroke="#e88661"
                strokeLinecap="round"
                strokeWidth="2"
              />
              <path
                d="M325.5-324.152a34.772,34.772,0,0,0,5.994-.015c3.782-.277,5.339.129,8.336.015s3.881-.042,5.671-.015"
                transform="translate(196.5 5.249)"
                fill="none"
                stroke="#e88661"
                strokeLinecap="round"
                strokeWidth="2"
              />
              <motion.path
                variants={burgerVariants}
                d="M325.5-324.152a48.145,48.145,0,0,1,5.994-.015c3.508.192,4.219.052,8.336.015s5.671-.015,5.671-.015"
                transform="translate(196.5 11.751)"
                fill="none"
                stroke="#e88661"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </g>
          </svg>
        </motion.div>
      </Container>
      <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;
