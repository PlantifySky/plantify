"use client"
import React, { useEffect, useState, useRef } from 'react';
import styles from '../styles/InvestorsFarmers.module.css';
import Image from 'next/image';

const InvestorsFarmers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const logoSectionRef = useRef(null);
  
  useEffect(() => {
    // Simple scroll animation trigger
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of element is visible
    );
    
    const currentRef = logoSectionRef.current; // Store the ref value in a variable
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) { // Use the stored ref value in the cleanup function
        observer.unobserve(currentRef);
      }
    };
  }, []);
  
  const handleStartInvesting = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdNgyOJ42g5ZSJHsX3p5whOXltis6q5z3N05kgI8vgfJ17goA/viewform?usp=dialog', '_blank');
  };

  const handleGetFunded = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdAoOUAvGXxl_ggBdpWKEHeKQ4vZt1VngUJCpWvZGZbIEyOAA/viewform?usp=dialog', '_blank');
  };
  
  return (
    <div>
      <div className={styles.container}>
        <section className={styles.splitSection}>
          <div className={styles.column}>
            <h2>Investors</h2>
            
            <h3>Invest in a better future – one farm at a time.</h3>
            <p>At Plantify, we believe that real change starts with small, meaningful actions. By investing in local farms, you aren&apos;t just funding crops – you&apos;re fueling communities, supporting sustainability, and helping to secure global food security.</p>
            
            <h3>Grow your portfolio with purpose.</h3>
            <p>With as little as R100, you can invest in real farm plots and watch your impact grow. Track crop progress, harvest timelines, and your returns with our transparent, easy-to-use dashboard. Every investment you make helps a farmer grow their yield and expand their future.</p>
            
            <h3>Be part of something bigger.</h3>
            <p>Whether you&apos;re a student looking to make your first investment, a working professional seeking ethical opportunities, or a grandparent planning for the next generation, Plantify makes it easy to put your money where it matters most.</p>
            
            <button className={styles.button} onClick={handleStartInvesting}>Start Investing</button>
          </div>

          <div className={styles.centerSvg}>
            <Image
              src="/combo.svg"
              alt="Connection Symbol"
              width={400}
              height={400}
              priority
            />
          </div>

          <div className={styles.column}>
            <h2>Farmers</h2>
            
            <h3>Unlock the true potential of your land.</h3>
            <p>Plantify connects farmers to a global network of everyday investors who believe in agriculture&apos;s future. Instead of struggling to secure loans or credit, you can list your farm projects and receive direct investment to grow your harvest and income.</p>
            
            <h3>Support designed for you.</h3>
            <p>Our platform makes it simple: upload your farm details, set your funding needs, and start connecting with investors who want to support your success. As you grow your crops, you&apos;ll be able to share progress, build relationships, and watch your community of supporters expand.</p>
            
            <h3>Grow beyond your fields.</h3>
            <p>Plantify isn&apos;t just a funding platform — it&apos;s a movement to empower rural farmers, drive local economies, and create a healthier, greener future. Join a growing community that believes in your vision, your work, and your harvest.</p>
            
            <button className={styles.button} onClick={handleGetFunded}>Get Funded</button>
          </div>
        </section>
      </div>

      <section 
        ref={logoSectionRef}
        className={`${styles.logoSection} ${isVisible ? styles.animatedSlideUp : ''}`}
      >
        <div className={styles.sectionHeader}>Every Element Has a Purpose</div>
        <div className={styles.sectionTitle}>
          Our name and logo were carefully crafted to reflect our mission of growth, connection, and sustainability.
        </div>
        
        <div className={styles.logoDisplay}>
          <div className={styles.logoContainer}>
            <div className={`${styles.bigLogo} ${isVisible ? styles.animatedGrow : ''}`}>
              <Image
                src="/logo2.svg" 
                alt="Plantify Logo"
                width={380}
                height={380}
                priority
              />
            </div>
          </div>
          
          <div className={styles.featureContainer}>
            <div className={styles.verticalArrow}></div>
            
            <div className={styles.featureItem}>
              <div className={styles.featureArrow}></div>
              <div className={styles.featureTitle}>Symbol of Growth:</div>
              <div className={styles.featureDescription}>
                The embedded leaf represents life, farming, and the organic growth we aim to lead—both for farmers and communities worldwide.
              </div>
            </div>
            
            <div className={styles.verticalArrow}></div>
            
            <div className={styles.featureItem}>
              <div className={styles.featureArrow}></div>
              <div className={styles.featureTitle}>Plant + Amplify:</div>
              <div className={styles.featureDescription}>
                Our name is born of two ideas: planting for the future and amplifying impact through technology, innovation, and community-driven investment.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestorsFarmers;