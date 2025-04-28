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
          <div className={`w-full ${isMobile ? 'mb-8' : 'md:w-[55%] md:pr-5'}`}>
            <div className="bento-grid-wrapper">
              <BentoGrid className={`${isMobile ? "grid-cols-1" : "grid-cols-2"} gap-4 bento-visible`}>
                {/* Empowering rural farmers - top left */}
                <BentoGridItem
                  className="col-span-1 row-span-1 group relative bento-item"
                  header={
                    <div className="relative w-full h-full min-h-[180px] rounded-lg overflow-hidden border border-gray-200 shadow-md">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40 z-10" />
                      <div className="absolute bottom-8 left-8 z-20">
                        <h3 className="text-white font-semibold text-xl drop-shadow-md">Empowering rural<br />farmers with<br />access to capital</h3>
                      </div>
                      <div className="absolute inset-0 bg-cover bg-center z-5 image-fix" 
                           style={{backgroundImage: "url('/empfarm.svg')"}} />
                    </div>
                  }
                />
                
                {/* AI-powered - middle (taller) */}
                <BentoGridItem
                  className="col-span-1 row-span-2 md:col-span-1 group relative bento-item"
                  header={
                    <div className="relative w-full h-full min-h-[180px] md:min-h-[320px] rounded-lg overflow-hidden border border-gray-200 shadow-md">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40 z-10" />
                      <div className="absolute bottom-8 left-8 z-20">
                        <p className="text-[rgba(89,156,16,1)] font-semibold text-lg drop-shadow-md bg-black/20 px-2 py-1 rounded inline-block">AI-powered</p>
                        <h3 className="text-white font-semibold text-2xl mt-1 drop-shadow-md">risk + yield<br />predictions</h3>
                      </div>
                      <div className="absolute inset-0 bg-cover bg-center z-5 image-fix" 
                           style={{backgroundImage: "url('/farmtech.svg')"}} />
                    </div>
                  }
                />
                
                {/* Farm fields - top right */}
                <BentoGridItem
                  className="col-span-1 row-span-1 group relative bento-item"
                  header={
                    <div className="relative w-full h-full min-h-[180px] rounded-lg overflow-hidden border border-gray-200 shadow-md">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10" />
                      <div className="absolute inset-0 bg-cover bg-center z-5 image-fix" 
                           style={{backgroundImage: "url('/tr.svg')"}} />
                    </div>
                  }
                />

                {/* Vegetable market - bottom left */}
                <BentoGridItem
                  className="col-span-1 row-span-1 group relative bento-item"
                  header={
                    <div className="relative w-full h-full min-h-[180px] rounded-lg overflow-hidden border border-gray-200 shadow-md">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10" />
                      <div className="absolute inset-0 bg-cover bg-center z-5 image-fix" 
                           style={{backgroundImage: "url('/brfarm.svg')"}} />
                    </div>
                  }
                />
                
                {/* Turning everyday people - bottom right */}
                <BentoGridItem
                  className="col-span-1 row-span-1 group relative bento-item"
                  header={
                    <div className="relative w-full h-full min-h-[180px] rounded-lg overflow-hidden border border-gray-200 shadow-md">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40 z-10" />
                      <div className="absolute top-8 left-4 z-20">
                        <h3 className="text-white font-semibold text-xl drop-shadow-md">Turning everyday<br />people into impact<br />investors</h3>
                      </div>
                      <div className="absolute inset-0 bg-cover bg-center z-5 image-fix" 
                           style={{backgroundImage: "url('/br.svg')"}} />
                    </div>
                  }
                />
              </BentoGrid>
            </div>
          </div>
          
          {/* Text content on the right */}
          <div className={`w-full ${isMobile ? '' : 'md:w-[38%] md:pl-5'}`}>
            <h3 className="makes-us-different-heading mb-4 text-center md:text-left">What Makes Us Different</h3>
            <h2 className="agritech-platform-heading mb-5 text-center md:text-left">AgriTech Digital Platform</h2>
            <div className="agritech-content text-center md:text-left">
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
  );
}