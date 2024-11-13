import React from 'react'
import styles from './TrustCard.module.css'
import comment from '../../assets/comment.png'

const TrustCard = ({ profile }) => {
  return (
    <div className={styles.trustCard}>
      <div className={styles.up}>
        <img src={profile} alt="" />
      </div>
      <div className={styles.down}>
        <p>At The Trainer Locker, I focus on building trust and communication between horse and rider,  With over 15 years of experience.</p>
        <div className={styles.comment}>
          <img src={comment} alt="" />
          <div>
            <h2>James Morgan</h2>
            <span>Certificate IV in Horse Racing</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrustCard