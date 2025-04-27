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
  const [featuredMember, setFeaturedMember] = useState<TeamMember | null>(null);
  const [otherMembers, setOtherMembers] = useState<TeamMember[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      
      if (mobile) {
        // For mobile, place Abisola first and organize others for 2x2 grid
        const abisola = teamMembers[2]; // Abisola at index 2
        const others = teamMembers.filter((_, idx) => idx !== 2);
        setOrderedMembers([abisola, ...others]);
      } else {
        // For desktop, use original order
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
      <div className={`mx-auto ${styles.container}`}> {/* Removed container class to avoid conflicting styles */}
        {/* First row: Headings */}
        <div className={styles.headingContainer}>
          <p className={styles.subheading}>Building Credibility & Trust</p>
          <h2 className={styles.heading}>Meet The Team</h2>
        </div>
        
        {/* Wrap cards and info in contentWrapper for better alignment */}
        <div className={styles.contentWrapper}>
          <div className={styles.cardsContainer}>
            <div className="w-full flex flex-col items-center">
              <FocusCards 
                cards={orderedMembers.map(member => ({
                  title: member.role,
                  src: member.src,
                }))}
                customClass={`${styles.teamCards} ${isMobile ? styles.mobileCards : ''}`}
                showMobileInfo={false}
                initialFocusIndex={isMobile ? 0 : null}
                renderName={renderMemberName}
              />
              
              {/* Team member info - desktop only */}
              <div className={`${styles.teamInfoContainer} ${isMobile ? styles.hideOnMobile : ''}`}>
                {orderedMembers.map((member, index) => (
                  <div key={index} className={styles.memberInfo}>
                    <h3 className={styles.memberName}>{member.name}</h3>
                    <p className={styles.memberRole}>
                      {member.name.includes("Luciun") ? "Tech lead & Co-Founder" : member.role2}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="hidden">
          <PhoneIcon />
        </div>
      </div>
    </section>
  )
}

export default MeetTheTeam