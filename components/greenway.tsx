import React from 'react'
import styles from './Greenway.module.css'
import Image from 'next/image'
// You can also import the SVG directly if it's in your project
import GWSvg from '../public/gw.svg'

const Greenway = () => {
  return (
    <div className={styles.container}>
      {/* Background overlay */}
      <div className={styles.overlay}></div>
      
      {/* Background image - corrected path */}
      <Image 
        src="/gw.svg"
        alt="Green Way Background" 
        fill
        className={styles.backgroundImage}
        priority
      />
      
      {/* Content */}
      <div className={styles.content}>
        <h1 className={styles.title}>
          The Green Way To <span className={styles.highlight}>Invest.</span>
        </h1>
      </div>
    </div>
  )
}

export default Greenway