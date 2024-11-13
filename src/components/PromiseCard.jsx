import React from 'react'

const PromiseCard = ({ figure, letter }) => {
  return (
    <div className="our-promise">
      <div><img src={figure} alt="" /></div> <span>{letter}</span>
    </div>
  )
}

export default PromiseCard