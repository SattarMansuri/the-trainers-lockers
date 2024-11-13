import React from 'react'
import { FEATURES } from './utils'
import Features from './Features'

const FeaturesPage = () => {
  return (
    <div className='featuresPage'>
      {
        FEATURES.map(({ id, figure, letter, para }) => (
          <Features key={id} figure={figure} letter={letter} para={para} />
        ))
      }
    </div>
  )
}

export default FeaturesPage