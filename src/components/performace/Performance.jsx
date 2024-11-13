import React from 'react'
import styles from './Performance.module.css'
import { FaArrowRightLong } from "react-icons/fa6";

const Performance = () => {
  return (
    <div id='about' className={styles.performance}>
      <h1>Race-ready performance starts now</h1>
      <p>
        TTL racehorse supplements are uniquely formulated in the United States – the <br /> most competitive horse racing arena in the world – to give your horses the <br /> stamina and health they need to push the limits for the win.
      </p>
      <h1>Plus, they’re 100% drug-free, so you <br /> can confidently train</h1>
      <button>Get Started Today! <FaArrowRightLong /> </button>
    </div>
  )
}

export default Performance