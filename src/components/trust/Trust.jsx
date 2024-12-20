import React, { useEffect } from 'react'
import styles from './Trust.module.css'
import { REVIEWS } from '../utils'
import TrustCard from '../trust card/TrustCard'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Trust = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: 'ease-in-sine' })
  }, [])
  return (
    <section data-aos="fade-up" id='bundles' className={styles.trust}>
      <h1 >
        <span style={{ color: '#DF3F44' }}>Trusted by trainers</span><br />
        across New Zealand and Australia
      </h1>
      <p>
        Outperform the competition. Your horse’s energy, stamina, and recovery can be <br /> the 1% difference between first and second place. Combat fatigue, muscle <br /> stiffness, and cramping with TTL’s top-selling products, formulated for optimal <br /> performance and endurance.
      </p>
      <div className={styles.reviews}>
        {REVIEWS.map(({ id, profile }) => (
          <TrustCard key={id} profile={profile} />
        ))}
      </div>
    </section>
  )
}

export default Trust