import React from 'react'
import Link from 'next/link'
import DrawerToggleButton from '../DrawerToggleButton/DrawerToggleButton'
import DarkModeToggleButton from '../DarkModeToggleButton/DarkModeToggleButton'
import styles from './Nav.module.scss'

function Nav(props) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className={styles.nav}>
      <header className={`${styles.toolbar} ${styles.shadow}`}>
        <nav className={styles.navbar}>
          <div className={styles.burger}>
            <DrawerToggleButton onHandleToggleDrawer={props.handleToggleDrawer} />
          </div>
          <div className={styles.logo}>
            <div onClick={scrollToTop}>
              <Link href='/'>Sjaak Kok</Link>
              <div className={styles.underline} />
            </div>
          </div>
          <div className={styles.rightside}>
            <div className={styles.nav_items}>
              <ul>
                <li>
                  <Link href='/#about'>
                    About
                  </Link>
                </li>
                <li>
                  <Link href='/#skills'>
                    Skills
                  </Link>
                </li>
                <li>
                  <Link href='/#mywork'>
                    My Work
                  </Link>
                </li>
                <li>
                  <Link href='/blogs'>
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href='/#contact'>
                    Contact
                  </Link>
                </li>
                <li>
                  <a
                    href='https://www.linkedin.com/in/sjaak-kok/'
                    target='_self'
                    className={styles.resume}
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.darkmode}>
              <DarkModeToggleButton
                onHandleToggleDarkMode={props.handleToggleDarkMode}
              />
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
export default Nav
