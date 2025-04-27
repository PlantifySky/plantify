"use client"
import React, { useState, useEffect } from 'react'
import { FocusCards } from './ui/focus-cards'
import { PhoneIcon } from './icons/PhoneIcon'
import styles from './MeetTheTeam.module.css'

interface TeamMember {
  name: string;
  department: string;
  src: string;
  title: string;
  role: string;
  role2: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Yadav S Singh",
    department: "CEO & Co-Founder",
    src: "/per1.svg",
    title: "Yadav S Singh - CEO & Co-Founder",
    role: "CEO IG",
    role2: "CEO & Co-Founder"
  },
  {
    name: "Abrahame H Mola",
    department: "CEO & Co-Founder",
    src: "/per2.svg",
    title: "Abrahame H Mola - CEO & Co-Founder",
    role: "CEO IG",
    role2: "CEO & Co-Founder"
  },
  {
    name: "Abisola O Adeyanu",
    department: "CEO & Co-Founder",
    src: "/per3.svg",
    title: "Abisola O Adeyanu - CEO & Co-Founder",
    role: "CEO",
    role2: "CEO & Co-Founder"
  },
  {
    name: "Harrington Mbangu",
    department: "CEO & Co-Founder",
    src: "/per4.svg",
    title: "Harrington Mbangu - CEO & Co-Founder",
    role: "CEO IG",
    role2: "CEO & Co-Founder"
  },
  {
    name: "Luciun September",
    department: "Tech Lead & Co-Founder",
    src: "/per5.svg",
    title: "Luciun September - Tech Lead & Co-Founder",
    role: "TECH LEAD",
    role2: "Tech lead & Co-Founder"
  }
]

const MeetTheTeam = () => {
  const [orderedMembers, setOrderedMembers] = useState(teamMembers);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      
      if (mobile) {
        const abisola = teamMembers[2];
        const others = teamMembers.filter((_, idx) => idx !== 2);
        setOrderedMembers([abisola, ...others]);
      } else {
        setOrderedMembers(teamMembers);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderMemberName = (index: number) => {
    const member = orderedMembers[index];
    const displayRole = member.name.includes("Luciun") ? "Tech lead & Co-Founder" : member.role2;
    
    return (
      <div className={styles.inlineNameContainer}>
        <h3 className={styles.memberName}>{member.name}</h3>
        <p className={styles.memberRole}>{displayRole}</p>
      </div>
    );
  };
  
  return (
    <section className={styles.teamSection}>
      <div className={`container mx-auto px-4 ${styles.container}`}>
        {/* First row: Headings */}
        <div className={styles.headingContainer}>
          <p className={styles.subheading}>Building Credibility & Trust</p>
          <h2 className={styles.heading}>Meet The Team</h2>
        </div>
        
        {/* Focus Cards - with reordered members for mobile */}
        <div className={styles.cardsContainer}>
          <FocusCards 
            cards={orderedMembers.map(member => ({
              title: member.role,
              src: member.src,
            }))}
            customClass={styles.teamCards}
            showMobileInfo={false}
            initialFocusIndex={isMobile ? 0 : null}
            renderName={renderMemberName}
          />
        </div>
        
        {/* Team member info - desktop only */}
        <div className={`${styles.teamInfoContainer} ${isMobile ? styles.hideOnMobile : ''}`}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.memberInfo}>
              <h3 className={styles.memberName}>{member.name}</h3>
              <p className={styles.memberRole}>{member.role2}</p>
            </div>
          ))}
        </div>
        
        {/* Placeholder SVGs for development - will be replaced with actual images */}
        <div className="hidden">
          <PhoneIcon />
        </div>
      </div>
    </section>
  )
}

export default MeetTheTeam