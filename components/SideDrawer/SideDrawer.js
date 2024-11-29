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
            <Link href='/'>Home</Link>
          </li>
          <li onClick={props.handleCloseDrawer}>
            <Link href='/#about'>
              About
            </Link>
          </li>
          <li onClick={props.handleCloseDrawer}>
            <Link href='/#skills'>
              Skills
            </Link>
          </li>
          <li onClick={props.handleCloseDrawer}>
            <Link href='/#mywork'>
              My Work
            </Link>
          </li>
          <li onClick={props.handleCloseDrawer}>
            <Link href='/blogs'>
              Blogs
            </Link>
          </li>
          <li onClick={props.handleCloseDrawer}>
            <Link href='/#contact'>
              Contact
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
