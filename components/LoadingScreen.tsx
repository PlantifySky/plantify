"use client";

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import styles from '../app/Loading.module.css';

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Show for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  // Don't render if not visible
  if (!isVisible) return null;

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
