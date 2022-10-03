import React from 'react'
import Link from 'next/link'

import Styles from './NavbarDesk.module.css'
import { FaUserAlt, FaQuestion } from 'react-icons/fa'

const navbarDesk = (props) => {
  let links = (
    <React.Fragment>
      <Link
        className={({ isActive }) =>
          isActive ? [Styles.active, Styles.link].join(' ') : Styles.link
        }
        href="/account"
      >
        <FaUserAlt />
      </Link>
      <Link
        className={({ isActive }) =>
          isActive ? [Styles.active, Styles.link].join(' ') : Styles.link
        }
        href="/help"
      >
        <FaQuestion />
      </Link>
    </React.Fragment>
  )

  if (!props.isAuthenticated) {
    links = (
      <Link
        className={({ isActive }) =>
          isActive ? [Styles.active, Styles.link].join(' ') : Styles.link
        }
        href="/auth"
      >
        Login / Register
      </Link>
    )
  }

  return (
    <React.Fragment>
      <div className={Styles.links}>
        <Link
          className={({ isActive }) =>
            isActive ? [Styles.active, Styles.link].join(' ') : Styles.link
          }
          href="/"
        >
          HOME
        </Link>
        <Link
          className={({ isActive }) =>
            isActive ? [Styles.active, Styles.link].join(' ') : Styles.link
          }
          href="/dashboard"
        >
          DASHBOARD
        </Link>
        <Link
          className={({ isActive }) =>
            isActive ? [Styles.active, Styles.link].join(' ') : Styles.link
          }
          href="/add-record"
        >
          ADD RECORD
        </Link>
        <Link
          className={({ isActive }) =>
            isActive ? [Styles.active, Styles.link].join(' ') : Styles.link
          }
          href="/fuel-prices"
        >
          FUEL PRICES
        </Link>
      </div>

      <div className={Styles.links}>{links}</div>
    </React.Fragment>
  )
}

export default navbarDesk
