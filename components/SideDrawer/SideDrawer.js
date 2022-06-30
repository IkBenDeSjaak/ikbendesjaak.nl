import React from 'react'
import Link from 'next/link'
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
              props.handleCloseDrawer()
              scrollToTop()
            }}
          >
            <Link href='/'><a>Home</a></Link>
          </li>
          <li onClick={props.handleCloseDrawer}>
            <Link href='/#about'>
              <a>About</a>
            </Link>
          </li>
          <li onClick={props.handleCloseDrawer}>
            <Link href='/#skills'>
              <a>Skills</a>
            </Link>
          </li>
          <li onClick={props.handleCloseDrawer}>
            <Link href='/#mywork'>
              <a>My Work</a>
            </Link>
          </li>
          <li onClick={props.handleCloseDrawer}>
            <Link href='/blogs'>
              <a>Blogs</a>
            </Link>
          </li>
          <li onClick={props.handleCloseDrawer}>
            <Link href='/#contact'>
              <a>Contact</a>
            </Link>
          </li>
          <li onClick={props.handleCloseDrawer}>
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
