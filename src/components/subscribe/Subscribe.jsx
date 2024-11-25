import React, { useEffect } from 'react'
import styles from './Subscribe.module.css'
import { FaCheckCircle } from "react-icons/fa";
import sub from '../../assets/sub.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Subscribe = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: 'ease-in-sine' })
  }, [])
  return (
    <section data-aos="fade-up" className={styles.subscribe}>
      <div className={styles.left}>
        <h1><span style={{ color: '#DF3F44' }}>Subscribe</span> & Save</h1>
        <p>Become a subscriber and and on every order</p>
        <div style={{ marginTop: '5vh' }}><FaCheckCircle color='#DF3F44' /> <h3>Save upto 20%</h3></div>
        <div><FaCheckCircle color='#DF3F44' /> <h3>From as little as $0.70 a day</h3></div>
        <div><FaCheckCircle color='#DF3F44' /> <h3>Pause or cancel anytime</h3></div>
        <button>Shop Now</button>
      </div>
      <div className={styles.right}>
        <img src={sub} alt="" />
      </div>
    </section>
  )
}

export default Subscribe