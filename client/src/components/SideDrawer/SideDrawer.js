import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import styles from './SideDrawer.module.scss'

const SideDrawer = (props) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      className={
                props.isShown
                  ? `${styles.side_drawer} ${styles.open}`
                  : styles.side_drawer
            }
    >
      <nav>
        <ul>
          <li
            onClick={() => {
              props.closeDrawer()
              scrollToTop()
            }}
          >
            <Link to='/'>Home</Link>
          </li>
          <li onClick={props.closeDrawer}>
            <HashLink smooth to='/#about'>
              About
            </HashLink>
          </li>
          <li onClick={props.closeDrawer}>
            <HashLink smooth to='/#skills'>
              Skills
            </HashLink>
          </li>
          <li onClick={props.closeDrawer}>
            <HashLink smooth to='/#mywork'>
              My Work
            </HashLink>
          </li>
          <li onClick={props.closeDrawer}>
            <HashLink smooth to='/#contact'>
              Contact
            </HashLink>
          </li>
          <li onClick={props.closeDrawer}>
            <a
              className={styles.resume}
              href='resume.pdf'
              target='_blank'
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default SideDrawer
