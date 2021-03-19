import * as React from 'react';
import Brand from 'src/assets/images/brand.svg';
import { header, brand } from './styles.module.scss';

const Header = () => (
  <header className={header}>
    <div className={brand}>
      <Brand />
    </div>
    <div>Hamburger</div>
  </header>
);

export default Header;
