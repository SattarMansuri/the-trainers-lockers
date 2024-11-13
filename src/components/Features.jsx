import React from 'react'

const Features = ({ figure, letter, para }) => {
  return (
    <div className='features'>
      <img src={figure} alt="" />
      <h1>{letter}</h1>
      <p>{para}</p>
    </div>
  )
}

export default Features