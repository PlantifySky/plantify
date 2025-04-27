"use client"; // Add this to make it a client component

import Image from 'next/image';
import React, { useEffect } from 'react';
import styles from './Loading.module.css';

export default function Loading() {
  // Force the component to render for a minimum amount of time
  useEffect(() => {
    // This ensures the loading state is visible
    const timer = setTimeout(() => {
      // The component will unmount naturally when the page is ready
    }, 2000); // Show for at least 2 seconds
    
    return () => clearTimeout(timer);
  }, []);
  
  // Create decorative leaf elements that appear randomly
  const renderLeafElements = () => {
    const leaves = [];
    const numberOfLeaves = 6;
    
    for (let i = 0; i < numberOfLeaves; i++) {
      const randomTop = Math.floor(Math.random() * 100);
      const randomLeft = Math.floor(Math.random() * 100);
      const randomSize = Math.floor(Math.random() * 20) + 10; // 10-30px
      const randomRotate = Math.floor(Math.random() * 360);
      const randomAnimationDelay = Math.floor(Math.random() * 3);
      
      leaves.push(
        <div 
          key={i}
          className={styles.leafIcon}
          style={{
            top: `${randomTop}%`,
            left: `${randomLeft}%`,
            width: `${randomSize}px`,
            height: `${randomSize}px`,
            transform: `rotate(${randomRotate}deg)`,
            animationDelay: `${randomAnimationDelay}s`
          }}
        />
      );
    }
    
    return leaves;
  };

  return (
    <div className={styles.loadingContainer}>
      {renderLeafElements()}
      
      <div className={styles.loadingContent}>
        <div className={styles.logoContainer}>
          <Image
            src="/logo2.svg"
            alt="Plantify Logo"
            width={120}
            height={120}
            className={styles.pulseAnimation}
            priority
          />
        </div>
        
        <div className={styles.spinnerContainer}>
          <div className={styles.spinner}></div>
        </div>
        
        <p className={styles.loadingText}>Growing something amazing...</p>
      </div>
    </div>
  );
}