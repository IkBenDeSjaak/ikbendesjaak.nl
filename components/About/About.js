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
            I&apos;m a web developer from the Netherlands. I&apos;m
            currently working at a digital agency located in the Netherlands.
          </p>
          <p>
            I especially like to work with .NET and JavaScript.
            JavaScript and specifically the React framework is also
            used to create this website.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
