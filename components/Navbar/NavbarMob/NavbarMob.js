import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Styles from './NavbarMob.module.css'
import { FaUserAlt, FaQuestion } from 'react-icons/fa'
import { MdMenu, MdOutlineClose } from 'react-icons/md'

const NavbarMob = (props) => {
  const [drawerState, setdrawerState] = useState(Styles.close)

  const openDrawerHandler = () => {
    setdrawerState(Styles.open)
  }

  const closeDrawerHandler = () => {
    setdrawerState(Styles.close)
  }

  const router = useRouter()

  return (
    <div className={Styles.container}>
      <div className={Styles.hamburger}>
        <MdMenu style={{color:"black"}} onClick={openDrawerHandler} />
      </div>
      <div
        onClick={closeDrawerHandler}
        className={[Styles.NavModal, drawerState].join(' ')}
      >
        <div className={Styles.logoSec}>
          <div className={Styles.logo}>
            <Link style={{ color: 'white', textDecoration: 'none' }} href="/">
              Hinna Henna
            </Link>
          </div>
          <MdOutlineClose style={{color:"black"}} onClick={closeDrawerHandler} />
        </div>

        {/* Icons */}
        <div className={Styles.links}></div>

        <div className={Styles.linksVert}>
          <Link href="/">
            <a
              className={
                router.pathname === '/'
                  ? [Styles.active, Styles.link].join(' ')
                  : Styles.link
              }
            >
              HOME
            </a>
          </Link>
          <Link href="/services">
            <a
              className={
                router.pathname === '/services'
                  ? [Styles.active, Styles.link].join(' ')
                  : Styles.link
              }
            >
              SERVICES
            </a>
          </Link>
          <Link href="/gallery">
            <a
              className={
                router.pathname === '/gallery'
                  ? [Styles.active, Styles.link].join(' ')
                  : Styles.link
              }
            >
              GALLERY
            </a>
          </Link>
          <Link href="/about">
            <a
              className={
                router.pathname === '/about'
                  ? [Styles.active, Styles.link].join(' ')
                  : Styles.link
              }
            >
              ABOUT
            </a>
          </Link>
          <Link href="/contact">
            <a
              className={
                router.pathname === '/contact'
                  ? [Styles.active, Styles.link].join(' ')
                  : Styles.link
              }
            >
              CONTACT
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NavbarMob
