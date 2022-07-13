import React, { useState, useEffect } from 'react'

import styles from './Compliments.module.scss'

import complimentsData from './compliments.json'

const Compliments = () => {
  const [compliments] = useState([...complimentsData])
  const [currentCompliment, setCurrentCompliment] = useState('')

  useEffect(() => {
    const generateCompliment = () => {
      const number = Math.floor(Math.random() * compliments.length)
      return compliments[number]
    }

    setCurrentCompliment(generateCompliment())
  }, [compliments])

  return (
    <div className={styles.compliments}>
      <div className={styles.parent}>
        <div className={styles.centered}>
          <h1>Hello sweet person,</h1>
          <h1>{currentCompliment}</h1>
        </div>
      </div>
    </div>
  )
}

export default Compliments 
