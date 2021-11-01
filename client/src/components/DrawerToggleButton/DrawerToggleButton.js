import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'

import styles from './DrawerToggleButton.module.scss'

const DrawerToggleButton = (props) => (
  <div className={styles.drawerbutton}>
    <IconButton
      className={styles.button}
      aria-label='sidedrawer toggle button'
      onClick={props.click}
    >
      <Icon className='fas fa-bars' />
    </IconButton>
  </div>
)

export default DrawerToggleButton
