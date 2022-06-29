import React, { useEffect, useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import { isTablet } from 'react-device-detect'

import Nav from '../Nav/Nav'
import Backdrop from '../Backdrop/Backdrop'
import SideDrawer from '../SideDrawer/SideDrawer'

import styles from './Layout.module.scss'

const Layout = ({children}) => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)
  const [theme, setTheme] = useState('light')
  const handlers = useSwipeable({
    onSwipedRight: (SwipeEventData) => {
      if (
        SwipeEventData.initial[0] < 110 ||
                (isTablet && SwipeEventData.initial[0] < 220)
      ) {
        setSideDrawerOpen(true)
      }
    },
    onSwipedLeft: () => setSideDrawerOpen(false)
  })

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme) {
      setTheme(theme)
    } else {
      setTheme('light')
    }
  }, [])

  const toggleDrawerClickHandler = () => {
    setSideDrawerOpen(true)
  }

  const closeDrawerClickHandler = () => {
    setSideDrawerOpen(false)
  }

  const toggleDarkMode = () => {
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else {
      localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  }

  // const dropHandlers = () => {
  //     if (isTablet) {
  //         return;
  //     } else {
  //         return { ...handlers };
  //     }
  // };

  let backdrop

  if (sideDrawerOpen) {
    backdrop = <Backdrop closeDrawer={closeDrawerClickHandler} />
  }

  return (
      <div {...handlers} className={`${styles.app} ${theme}`}>
          <Nav
            handleToggleDrawer={toggleDrawerClickHandler}
            handleToggleDarkMode={toggleDarkMode}
          />
          <SideDrawer
            isShown={sideDrawerOpen}
            handleCloseDrawer={closeDrawerClickHandler}
          />
          {backdrop}
          <div className={styles.fadein}>
            {children}
          </div>
      </div>
  )
}

export default Layout