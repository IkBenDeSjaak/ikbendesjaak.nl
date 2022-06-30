import React from 'react'

import styles from './Skills.module.scss'

import Title from '../shared/Title/Title'

function Skills() {
  return (
    <div className={styles.skills} id='skills'>
      <Title title='MY SKILLS' />
      <p>These are some technologies I&apos;ve been working with:</p>
      <div className={styles.content}>
        <div>
          <img src='/skills-images/react.svg' alt='React logo' />
          <p>React</p>
        </div>
        <div>
          <img src='/skills-images/node.svg' alt='Node.js logo' />
          <p>Node.js</p>
        </div>
        <div>
          <img src='/skills-images/java.svg' alt='Java logo' />
          <p>Java</p>
        </div>
        <div>
          <img src='/skills-images/css.svg' alt='CSS logo' />
          <p>CSS</p>
        </div>
        <div>
          <img src='/skills-images/mssql.svg' alt='SQL logo' />
          <p>SQL</p>
        </div>
        <div>
          <img src='/skills-images/net.svg' alt='.NET logo' />
          <p>.NET</p>
        </div>
      </div>
    </div>
  )
}

export default Skills
