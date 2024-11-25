import React, { useEffect } from 'react'
import styles from './Advertise.module.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Advertise = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <section data-aos="fade-up" className={styles.advertise}>
      <div>
        <h1>Keep Your Horse Race-Ready</h1>
        <p>with our all-natural, performance-enhancing solutions.</p>
      </div>
    </section>
  )
}

export default Advertise