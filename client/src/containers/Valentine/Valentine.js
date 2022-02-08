import React from 'react'

import styles from './Valentine.module.scss'

const Valentine = () => (
  <div className={styles.valentine}>
    <div className={styles.content}>
      <div className={styles.cinematicket}>
        <div className={styles.toptext}><p>CINEMA TICKET</p></div>
        <div className={styles.maintext}><p>Je krijgt van mij deze tegoedbon voor een bioscoopkaartje om een film naar keuze (of mijn keuze <span role='img' aria-label='Joke'>😜</span>) met mij te kijken <span role='img' aria-label='Kiss'>😘</span></p></div>
      </div>
    </div>
  </div>
)

export default Valentine
