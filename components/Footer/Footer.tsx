import Image from 'next/image'
import React from 'react'
import { FaFacebook,FaTwitterSquare,FaInstagram, FaYoutube } from "react-icons/fa";

import Styles from './footer.module.css'

export default function () {
  return (
    <div className={Styles.footerContainer}>
      <div className={Styles.footerContent}>
        <p className={Styles.logo}>Hinna Henna</p>
        <div className={Styles.socials}>
          <p>Socials</p>
          <div>
            <a href=""><FaInstagram/>Instagram</a>
            <a href=""><FaYoutube/>Youtube</a>
            <a href=""><FaTwitterSquare/>Twitter</a>
            <a href=""><FaFacebook />Facebook</a>
          </div>
        </div>
        <div className={Styles.about}>
          <p>About us</p>
          <p>
            This is platform for mehndi, can do Mehndi/Henna for just about any
            occasion. We Specialize in Bridal Mehndi, Sangeet Parties,
            Engagements, Baby Showers, Birthday Parties, Ladies Night outs,
            School Events, Corporate Events and Fundraisers.
          </p>
        </div>
      </div>
      <div className={Styles.copyright}>copyright © 2022 || Hinna Henna</div>
    </div>
  )
}
