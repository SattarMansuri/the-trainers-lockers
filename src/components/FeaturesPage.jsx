import React, { useEffect } from 'react'
import { FEATURES } from './utils'
import Features from './Features'
import Aos from 'aos'
import 'aos/dist/aos.css'

const FeaturesPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: 'ease-in-sine' })
  }, [])
  return (
    <div data-aos="fade-up" className='featuresPage'>
      {
        FEATURES.map(({ id, figure, letter, para }) => (
          <Features key={id} figure={figure} letter={letter} para={para} />
        ))
      }
    </div>
  )
}

export default FeaturesPage