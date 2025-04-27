"use client"
import React, { useState, useEffect } from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'

export const MakeUsDif = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check initially
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center max-w-[1280px] w-full mx-auto">
          {/* Bento Grid on the left - made more centered */}
          <div className="w-full md:w-[50%] md:pr-5">
            <BentoGrid className="grid-rows-[auto,auto] max-w-full">
              {/* Empowering rural farmers - top left */}
              <BentoGridItem
                className="col-span-1 row-span-1 group relative"
                header={
                  <div className="relative w-full h-full min-h-[180px] rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 z-10" />
                    <div className={`absolute bottom-8 left-8 z-20 transition-opacity duration-300 ${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                      <h3 className="text-white font-semibold text-xl">Empowering rural<br />farmers with<br />access to capital</h3>
                    </div>
                    <div className="absolute inset-0 bg-cover bg-center" 
                         style={{backgroundImage: "url('/empfarm.svg')"}} />
                  </div>
                }
              />
              
              {/* AI-powered - middle (taller) */}
              <BentoGridItem
                className="col-span-1 row-span-2 md:col-span-1 group relative"
                header={
                  <div className="relative w-full h-full min-h-[180px] md:min-h-[320px] rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                    <div className={`absolute bottom-8 left-8 z-20 transition-opacity duration-300 ${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                      <p className="text-[rgba(89,156,16,1)] font-semibold text-lg">AI-powered</p>
                      <h3 className="text-white font-semibold text-2xl">risk + yield<br />predictions</h3>
                    </div>
                    <div className="absolute inset-0 bg-cover bg-center" 
                         style={{backgroundImage: "url('/farmtech.svg')"}} />
                  </div>
                }
              />
              
              {/* Farm fields - top right */}
              <BentoGridItem
                className="col-span-1 row-span-1 group relative"
                header={
                  <div className="relative w-full h-full min-h-[180px] rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center" 
                         style={{backgroundImage: "url('/tr.svg')"}} />
                  </div>
                }
              />

              {/* Vegetable market - bottom left */}
              <BentoGridItem
                className="col-span-1 row-span-1 group relative"
                header={
                  <div className="relative w-full h-full min-h-[180px] rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center" 
                         style={{backgroundImage: "url('/brfarm.svg')"}} />
                  </div>
                }
              />
              
              {/* Turning everyday people - bottom right */}
              <BentoGridItem
                className="col-span-1 row-span-1 group relative"
                header={
                  <div className="relative w-full h-full min-h-[180px] rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 z-10" />
                    <div className={`absolute bottom-8 left-8 z-20 transition-opacity duration-300 ${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                      <h3 className="text-white font-semibold text-xl">Turning everyday<br />people into impact<br />investors</h3>
                    </div>
                    <div className="absolute inset-0 bg-cover bg-center" 
                         style={{backgroundImage: "url('/br.svg')"}} />
                  </div>
                }
              />
            </BentoGrid>
          </div>

          {/* Text content on the right - adjusted for better spacing */}
          <div className="w-full md:w-[40%] flex flex-col justify-start pt-4 font-['Alexandria'] md:pl-5 mt-10 md:mt-0">
            <h4 className="makes-us-different-heading">What Makes Us Different</h4>
            <br/>
            <h2 className="agritech-platform-heading">AgriTech Digital Platform</h2>
            
            <div className="agritech-content">
              <p>
                While agricultural investment isn&apos;t new, our approach is. We are:
              </p>
              <ul className="list-disc pl-5 my-3">
                <li className="mb-2">Bringing &quot;crowdfarming&quot; to underserved regions, empowering local farmers with tools they never had access to</li>
                <li className="mb-2">Opening small-scale investments to the general public, making farming more accessible and attractive to young people</li>
                <li className="mb-2">Combining financial, environmental, and social returns into one transparent platform</li>
                <li className="mb-2">Using AI and data visualization to turn farming into a smart, trackable, and impactful digital experience</li>
              </ul>
              <p>
                We believe Plantify fits closely with NGDA&apos;s vision of digital action for societal impact. We&apos;re excited to be building something that merges sustainability, inclusion, and tech, and we hope to be part of the upcoming cohort.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}