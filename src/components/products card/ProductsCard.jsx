import React from 'react'
import styles from './ProductsCard.module.css'
import { FaArrowRightLong } from "react-icons/fa6";

const ProductsCard = ({ productImg, productName, about, supports, col, bgCol }) => {
  return (
    <div className={styles.productsCard}>
      <div className={styles.upper}>
        <img src={productImg} alt="" />
      </div>
      <div className={styles.lower}>
        <h3>{productName}</h3>
        <p>{about}</p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span>Supports: </span> {
            supports.map(({ id, image, word }) => (
              <div key={id} style={{ display: 'flex', alignItems: 'center', width: '100%' }}><img src={image} alt="" style={{ backgroundColor: bgCol }} /> <span>{word}</span></div>
            ))
          }
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ overflow: 'hidden' }}>
            <h5 style={{ color: col }}>$149.00</h5>
            <span className={styles.perDay}>$0.75 per day</span>
          </div>
          <button style={{ color: col, border: `1px solid${col}` }}> Shop Now <FaArrowRightLong /> </button>
        </div>
      </div>
    </div>
  )
}

export default ProductsCard