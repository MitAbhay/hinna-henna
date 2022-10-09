import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Styles from './NavbarDesk.module.css'
import { FaUserAlt, FaQuestion } from 'react-icons/fa'

const navbarDesk = (props) => {
  const router = useRouter()

  //  uncomment after implementing auth
  // let links = (
  //   <React.Fragment>
  //     <Link
  //       className={
  //         router.pathname === '/' ? [Styles.active, Styles.link].join(' ') : Styles.link
  //       }
  //       href="/account"
  //     >
  //       <FaUserAlt />
  //     </Link>
  //     <Link
  //       className={
  //         router.pathname === '/' ? [Styles.active, Styles.link].join(' ') : Styles.link
  //       }
  //       href="/help"
  //     >
  //       <FaQuestion />
  //     </Link>
  //   </React.Fragment>
  // )

  return (
    <React.Fragment>
      <div className={Styles.links}>
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

      {/* uncomment after implementing auth */}
      {/* <div className={Styles.links}>{links}</div>  */}
    </React.Fragment>
  )
}

export default navbarDesk
