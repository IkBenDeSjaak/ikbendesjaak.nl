import React from 'react'

import styles from './About.module.scss'

import Title from '../shared/Title/Title'

function About() {
  return (
    <div className={styles.about} id='about'>
      <Title title='ABOUT ME' />
      <div className={styles.content}>
        <img src='/images/character.png' alt='character' />
        <div className={styles.information}>
          <p>
            I&apos;m a beginning web developer from the Netherlands. I&apos;m
            currently studying Information and Communication
            Technology at university.
          </p>
          <p>
            I especially like to work with JavaScript, Node.js and
            React. These are also used to create this website.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
