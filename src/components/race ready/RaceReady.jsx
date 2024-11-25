import React, { useEffect } from 'react'
import styles from './RaceReady.module.css'
import unique from '../../assets/unique.png'
import natural from '../../assets/natural.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const RaceReady = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  })
  return (
    <section className={styles.main}>
      <div data-aos="fade-up" className={styles.sect}>
        <div>
          <h3>Uniquely formulated
            for horse trainers</h3>
          <h1>Who Want to Win</h1>
          <p>
            From joint health to muscle strength, our products keep your horse fit, fast, and ready to win. With advanced formulations trusted by top trainers, you can push past the competition and achieve the results you’ve been aiming for.
          </p>
          <button>Get Race Ready &rarr; </button>
        </div>
        <img src={unique} alt="" />
      </div>
      <div data-aos="fade-up" className={styles.sect2}>
        <img src={natural} alt="" />
        <div>
          <h3>Natural</h3>
          <h1>Bleeder Remedy</h1>
          <p>
            While more than 95% of racehorses experience exercise-induced pulmonary haemorrhage (EIPH), commonly known as bleeders, you want to avoid exposing them to side effects like dehydration from potent drugs. TTL's BleederShield can help strengthen capillaries in the lungs, reduce oxidative stress, and improve blood flow.
          </p>
          <button> Get Race Ready &rarr; </button>
        </div>
      </div>
    </section>
  )
}

export default RaceReady