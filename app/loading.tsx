"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Loading.module.css';

export default function Loading() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // This ensures the loading state is visible for exactly 1.5 seconds
    const timer = setTimeout(() => {
      setShowLoading(false); // Hide the loading screen after 1.5 seconds
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Don't render anything if loading time has passed
  if (!showLoading) return null;

  // Use fixed leaf configurations to ensure consistent rendering between server and client
  const leafConfigs = [
    {
      top: "22%",
      left: "45%",
      width: "11px",
      height: "11px",
      rotate: "138deg",
      delay: "2s"
    },
    {
      top: "72%",
      left: "34%",
      width: "22px",
      height: "22px",
      rotate: "115deg",
      delay: "2s"
    },
    {
      top: "62%",
      left: "69%",
      width: "10px",
      height: "10px",
      rotate: "283deg",
      delay: "1s"
    },
    {
      top: "13%",
      left: "7%",
      width: "22px",
      height: "22px",
      rotate: "84deg",
      delay: "2s"
    },
    {
      top: "71%",
      left: "62%",
      width: "10px",
      height: "10px",
      rotate: "5deg",
      delay: "0s"
    },
    {
      top: "3%",
      left: "83%",
      width: "12px",
      height: "12px",
      rotate: "214deg",
      delay: "2s"
    }
  ];

  // Render leaves with fixed positions
  const renderLeafElements = () => {
    return leafConfigs.map((config, i) => (
      <div
        key={i}
        className={styles.leafIcon}
        style={{
          top: config.top,
          left: config.left,
          width: config.width,
          height: config.height,
          transform: `rotate(${config.rotate})`,
          animationDelay: config.delay // Use animationDelay instead of animation-delay
        }}
      />
    ));
  };

  return (
    <div className={styles.loadingContainer}>
      {renderLeafElements()}
      <div className={styles.loadingContent}>
        <div className={styles.logoContainer}>
          <Image src="/NavLogo.svg" alt="Plantify Logo" width={120} height={60} priority />
        </div>
        <div className={styles.spinnerContainer}>
          <div className={styles.spinner} />
        </div>
        <p className={styles.loadingText}>Loading...</p>
      </div>
    </div>
  );
}