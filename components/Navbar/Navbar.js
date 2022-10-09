import React from 'react'
import Link from 'next/link'

import NavbarDesk from './NavbarDesk/NavbarDesk'
import NavbarMob from './NavbarMob/NavbarMob'
import Styles from './Navbar.module.css'

const navbar = (props) => {
  return (
    <div className={Styles.navbar}>
      <div className={Styles.logo}>
        <Link style={{ color: 'white', textDecoration: 'none' }} href="/">
          Hinna Henna
        </Link>
      </div>
      <NavbarDesk isAuthenticated={props.isAuthenticated} />
      <NavbarMob isAuthenticated={props.isAuthenticated} />
    </div>
  )
}

export default navbar
