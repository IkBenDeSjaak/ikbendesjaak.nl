import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import DrawerToggleButton from '../DrawerToggleButton/DrawerToggleButton'
import DarkModeToggleButton from '../DarkModeToggleButton/DarkModeToggleButton'
import styles from './Nav.module.scss'

function Nav (props) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className={styles.nav}>
      <header className={`${styles.toolbar} ${styles.shadow}`}>
        <nav className={styles.navbar}>
          <div className={styles.burger}>
            <DrawerToggleButton click={props.toggleDrawer} />
          </div>
          <div className={styles.logo}>
            <div onClick={scrollToTop}>
              <Link to='/'>Sjaak Kok</Link>
              <div className={styles.underline} />
            </div>
          </div>
          <div className={styles.rightside}>
            <div className={styles.nav_items}>
              <ul>
                <li>
                  <HashLink smooth to='/#about'>
                    About
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to='/#skills'>
                    Skills
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to='/#mywork'>
                    My Work
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to='/#contact'>
                    Contact
                  </HashLink>
                </li>
                <li>
                  {/* <Link
                                        className={styles.resume}
                                        to="resume.pdf"
                                    >
                                        Resume
                                    </Link> */}
                  <a
                    href='resume.pdf'
                    target='_blank'
                    className={styles.resume}
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.darkmode}>
              <DarkModeToggleButton
                click={props.toggleDarkMode}
              />
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
export default Nav
