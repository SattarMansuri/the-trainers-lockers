import React, { useEffect } from 'react'
import styles from './Support.module.css'
import { PRODUCTS_LISTS } from '../utils'
import ProductsCard from '../products card/ProductsCard'
import support from '../../assets/support.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Support = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  const product = PRODUCTS_LISTS.filter((elem) => elem.productName === 'UN-LOCK+')
  return (
    <section data-aos="fade-up" id='shopByBenefit' className={styles.support}>
      <h1><span style={{ color: '#DF3F44' }}>Support</span> Your Horse, Head to Hoof</h1>
      <p>Click to learn how our products enhance specific areas</p>
      <div className={styles.main}>
        <div className={styles.left}>
          {product.map(({ productImg, productName, about, supports, col, bgCol, id }) => (
            <ProductsCard key={id} productName={productName} productImg={productImg} about={about} supports={supports} col={col} bgCol={bgCol} />
          ))}
        </div>
        <div className={styles.right}>
          <img src={support} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Support