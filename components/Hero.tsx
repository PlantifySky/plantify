import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="hero-content flex-col lg:flex-row">
      <div className="flex flex-col w-full md:max-w-2xl z-10 px-4 md:px-0 pt-10 md:pt-0">
        <div className="text-center md:text-left mb-4">
          <span className="hero-tagline">
            Invest in Farms. Grow a Better Future
          </span>
        </div>

        <h1 className="hero-heading text-center md:text-left">
          <span className="text-[#65B741]">Plantify</span> 
          <span className="text-white"> connects everyday people with real farms for impact-driven returns.</span>
        </h1>
        
        <p className="hero-text text-white text-base md:text-lg mb-4 text-center md:text-left">
          We enable individuals to invest in specific farm plots and earn a 
          share of future harvest profits. At the same time, we provide 
          farmers with a much-needed alternative to traditional financing.
        </p>

        <div className="flex justify-center md:justify-start">
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdNgyOJ42g5ZSJHsX3p5whOXltis6q5z3N05kgI8vgfJ17goA/viewform?usp=dialog" 
            target="_blank" 
            rel="noopener noreferrer"
            className="waitlist-button"
          >
            Join Waitlist
          </a>
        </div>
      </div>
      
      <div className="hero-phone-container mt-10 lg:mt-0 hidden md:block z-10">
        <div className="hero-circle"></div>
        <Image 
          src="/phone.svg" 
          alt="Phone" 
          className="hero-phone w-full max-w-xs lg:max-w-md xl:max-w-lg"
          width={500}
          height={800} 
          priority
        />
      </div>
    </div>
  )
}

export default Hero