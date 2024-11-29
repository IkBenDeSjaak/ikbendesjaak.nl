import React from 'react'
import IconButton from '@mui/material/IconButton'
import Brightness2Icon from '@mui/icons-material/Brightness2';

import styles from './DarkModeToggleButton.module.scss'

const DarkModeToggleButton = (props) => (
  <div className={styles.darkmodebutton}>
    <IconButton
      className={styles.button}
      aria-label='darkmode toggle button'
      onClick={props.onHandleToggleDarkMode}
    >
      <Brightness2Icon />
    </IconButton>
  </div>
)

export default DarkModeToggleButton
