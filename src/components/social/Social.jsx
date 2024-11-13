import React from 'react'
import styles from './Social.module.css'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";


const Social = () => {
  return (
    <div className={styles.social}>
      <div className={styles.left}></div>
      <div className={styles.right}>
        <h1>Stay Ahead of the Pack</h1>
        <p>Sign up for tips, offer, and more</p>
        <input type="email" placeholder='Type your email' /><br />
        <button>Subscribe Now <FaArrowRightLong /> </button>
        <div className={styles.socialHandles}>
          <FaFacebookF onClick={() => window.location.replace('https://www.facebook.com/thetrainerslocker/')} />
          <FaTwitter />
          <RiInstagramFill onClick={() => window.location.replace('https://www.instagram.com/thetrainerslocker/')} />
          <FaLinkedinIn />
          <FaYoutube />
        </div>
      </div>
    </div>
  )
}

export default Social