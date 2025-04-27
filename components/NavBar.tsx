"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './NavBar.module.css';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [textColor, setTextColor] = useState('text-white');

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Adjust this value based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'hero', color: 'text-white' },
        { id: 'about', color: 'text-green-800' },
        { id: 'makeUsDif', color: 'text-white' },
        { id: 'greenway', color: 'text-green-800' },
        { id: 'team', color: 'text-white' },
        { id: 'ready', color: 'text-green-800' },
        { id: 'faq', color: 'text-white' }
      ];

      const scrollPosition = window.scrollY;
      let currentSection = sections[0];

      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= 150 && bottom >= 150) {
            currentSection = section;
          }
        }
      });

      setTextColor(currentSection.color);
    };

    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.logoContainer}>
          <a href="#hero" onClick={(e) => scrollToSection(e, 'hero')}>
            <Image src="/NavLogo.svg" alt="Plantify Logo" width={120} height={60} priority />
          </a>
        </div>

        <div className={`${styles.menuContainer} ${isMenuOpen ? styles.active : ''}`}>
          <ul className={styles.navLinks}>
            <li><a href="#hero" onClick={(e) => scrollToSection(e, 'hero')} className={`${styles.navLink} ${textColor}`}>Home</a></li>
            <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')} className={`${styles.navLink} ${textColor}`}>About Us</a></li>
            <li><a href="#roadmap" onClick={(e) => scrollToSection(e, 'roadmap')} className={`${styles.navLink} ${textColor}`}>Roadmap</a></li>
            <li><a href="#faq" onClick={(e) => scrollToSection(e, 'faq')} className={`${styles.navLink} ${textColor}`}>FAQ</a></li>
          </ul>
        </div>

        <div className={styles.rightControls}>
          <Link href="/contact" className={styles.contactBtn}>
            Contact
          </Link>
          
          <div className={styles.hamburger} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className={`${styles.bar} ${isMenuOpen ? styles.active : ''}`}></span>
            <span className={`${styles.bar} ${isMenuOpen ? styles.active : ''}`}></span>
            <span className={`${styles.bar} ${isMenuOpen ? styles.active : ''}`}></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
