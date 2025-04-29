import React from 'react'
import Image from 'next/image'

const HowToStart = () => {
  return (
    <section className="how-to-start py-20 px-4 md:px-8 lg:px-16 flex flex-col items-center justify-center min-h-[50vh]">
      <div className="container mx-auto text-center flex flex-col items-center justify-center">
        <h2 className="text-[rgba(89,156,16,1)] font-medium text-xl md:text-2xl mb-10">Three Steps</h2>
        <h1 className="how-works-heading text-6xl md:text-7xl lg:text-6xl mb-10 text-[#042C27]">
          How It Works
        </h1><br/>
        
        <p className="how-works-description mx-auto text-gray-700 text-base md:text-lg max-w-2xl mb-12">
          We provide farmers with a much-needed alternative to traditional financing. Our 
          goal is to promote food security, rural economic development, and 
          environmentally responsible farming through technology.
        </p><br/><br/>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {/* Card 1 */}
          <div className="step-card bg-[#7D9A8C] text-white">
            <div className="icon-container">
              <div className="icon-circle">
                <Image 
                  src="/farm.svg" 
                  alt="Farm icon"
                  width={48}
                  height={48}
                />
              </div>
            </div>
            <h3 className="step-title">Choose a Farm Plot or Yield</h3>
            <div className="step-label">Step 1</div>
            <p className="step-description">
              Browse through available farm plots or select from a list of high-demand crops. Each option comes with insights on location, soil type, projected returns, and sustainability impact—so you can invest with confidence.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="step-card bg-[#042C27] text-white">
            <div className="icon-container">
              <div className="icon-circle">
                <Image 
                  src="/money.svg" 
                  alt="Money icon"
                  width={48}
                  height={48}
                />
              </div>
            </div>
            <h3 className="step-title">Invest from as little as R100</h3>
            <div className="step-label">Step 2</div>
            <p className="step-description">
              Pick your preferred plot or yield and contribute as much as you like, starting at just R100. Your investment helps fund real agricultural projects while giving you access to real-time updates and projected returns.
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="step-card bg-[#7D9A8C] text-white">
            <div className="icon-container">
              <div className="icon-circle">
                <Image 
                  src="/invest.svg" 
                  alt="Invest icon"
                  width={48}
                  height={48}
                />
              </div>
            </div>
            <h3 className="step-title">Track Growth, Harvest & Earn Returns</h3>
            <div className="step-label">Step 3</div>
            <p className="step-description">
              Monitor your crops through the Plantify dashboard. From planting to harvest, you’ll receive updates on progress. Once the yield is sold, you earn your share of the returns directly—simple, transparent, and rewarding.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowToStart
