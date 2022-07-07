import React from 'react'
import { Container } from 'src/components/Base'
import BrandLogo from 'src/assets/images/brand.inline.svg'
import styles from './styles.module.scss'

const Navbar = () => {
  return (
    <nav
      className={styles.navbar}
      role="naviagtion"
      aria-label="main navigation"
    >
      <Container>
        <div className={styles.brand}>
          <BrandLogo />
        </div>
        <div className={styles.menu}></div>
      </Container>
    </nav>
  )
}

export default Navbar
