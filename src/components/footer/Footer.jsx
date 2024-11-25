import React from 'react'
import styles from './Footer.module.css'
import stamp from '../../assets/drug free.png'
import { IoMdMail } from "react-icons/io";
import { IoMdCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";



const Footer = () => {
  return (
    <footer id='contact' className={styles.main}>
      <div className={styles.left}>
        <div className={styles.trust}>
          <img src={stamp} alt="" />
          <div>
            <h2><b style={{ color: '#DF3F44' }}>Trust</b> in Every Scoop</h2>
            <span>Non-swabbale formula for your peace of mind</span>
          </div>
        </div>
        <span className={styles.copy}>Copyright &copy; 2024 The Trainer Locker</span>
      </div>

      <div className={styles.right}>
        <div className={styles.contacts}>
          <div>
            <h3>Quick Links</h3>
            <span><a href="#shopAll">Shop</a></span>
            <span><a href="#about">About</a></span>
            <span><a href="#bundles">Bundles</a></span>
            <span>Contact</span>
          </div>
          <div>
            <h3>Contact Us</h3>
            <span> <IoMdMail /> contact@company.com</span>
            <span> <IoMdCall style={{ marginRight: '-1.2vw' }} /> (414) 687 - 5892</span>
            <span><FaLocationDot /> 794 Mcallister St San Francisco, 94102</span>
          </div>
        </div>
        <span className={styles.rights}>All Rights Reserved | Terms and Conditions | Privacy Policy</span>
      </div>
    </footer>
  )
}

export default Footer