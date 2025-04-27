import React from 'react'
import styles from './Ready.module.css'

const Ready = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.heading}>Ready to invest in<br />a greener future?</h1>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdNgyOJ42g5ZSJHsX3p5whOXltis6q5z3N05kgI8vgfJ17goA/viewform?usp=dialog"
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.button}
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </div>
  )
}

export default Ready