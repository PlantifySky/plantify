import React from 'react'
import styles from './Ready.module.css'

const Ready = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.heading}>Ready to invest in<br />a greener future?</h1>
          <button className={styles.button}>Join Waitlist</button>
        </div>
      </div>
    </div>
  )
}

export default Ready