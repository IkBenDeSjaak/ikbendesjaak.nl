import React from 'react'
import styles from './TagButton.module.scss'

function TagButton({ name, selected }) {
  return (
    <div className={`${styles.tagButton} ${selected ? styles.selected : ''}`}>{name}</div>
  )
}

export default TagButton