import React, { useEffect } from 'react'
import styles from './Products.module.css'
import { PRODUCTS_LISTS } from '../utils'
import ProductsCard from '../products card/ProductsCard'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Products = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <section data-aos="fade-up" id='shopAll' className={styles.main}>
      <h1>Our <span style={{ color: '#DF3F44' }}>Core</span> Products</h1>
      <p>
        Keep your horse race-ready with our all-natural,<br />
        performance-enhancing solutions.
      </p>
      <div className={styles.productsList}>
        {
          PRODUCTS_LISTS.map(({ id, productImg, productName, about, supports, col, bgCol }) => (
            <ProductsCard key={id} productImg={productImg} productName={productName} about={about} supports={supports} col={col} bgCol={bgCol} />
          ))
        }
      </div>
    </section>
  )
}

export default Products