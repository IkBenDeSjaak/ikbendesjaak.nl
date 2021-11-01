import React from 'react'
import styles from './Backdrop.module.scss'

const Backdrop = ({ closeDrawer }) => (
  <div className={styles.backdrop} onClick={closeDrawer} />
)

export default Backdrop
