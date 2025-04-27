import React from 'react'
import Image from 'next/image'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { TextReveal } from "@/components/magicui/text-reveal";


export const MakeUsDif = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="container mx-auto max-w-7xl flex justify-center">
        <div className="flex flex-col md:flex-row gap-10 justify-center items-center max-w-[1280px] w-full">
          {/* Bento Grid on the left */}
          <div className="w-full md:w-[55%]">
            <BentoGrid className="grid-rows-[auto,auto] max-w-full">
              {/* Empowering rural farmers - top left */}
              <BentoGridItem
                className="col-span-1 row-span-1"
                header={
                  <div className="relative w-full h-full min-h-[180px] rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 z-10" />
                    <div className="absolute bottom-8 left-8 z-20">
                      <h3 className="text-white font-semibold text-xl">Empowering rural<br />farmers with<br />access to capital</h3>
                    </div>
                    <div className="absolute inset-0 bg-cover bg-center" 
                         style={{backgroundImage: "url('/empfarm.svg')"}} />
                  </div>
                }
              />
              
              {/* AI-powered - middle (taller) */}
              <BentoGridItem
                className="col-span-1 row-span-2 md:col-span-1"
                header={
                  <div className="relative w-full h-full min-h-[200px] md:min-h-[380px] rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                    <div className="absolute bottom-8 left-8 z-20">
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
                className="col-span-1 row-span-1"
                header={
                  <div className="relative w-full h-full min-h-[180px] rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center" 
                         style={{backgroundImage: "url('/tr.svg')"}} />
                  </div>
                }
              />

              {/* Vegetable market - bottom left */}
              <BentoGridItem
                className="col-span-1 row-span-1"
                header={
                  <div className="relative w-full h-full min-h-[180px] rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center" 
                         style={{backgroundImage: "url('/brfarm.svg')"}} />
                  </div>
                }
              />
              
              {/* Turning everyday people - bottom right */}
              <BentoGridItem
                className="col-span-1 row-span-1"
                header={
                  <div className="relative w-full h-full min-h-[180px] rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 z-10" />
                    <div className="absolute bottom-8 left-8 z-20">
                      <h3 className="text-white font-semibold text-xl">Turning everyday<br />people into impact<br />investors</h3>
                    </div>
                    <div className="absolute inset-0 bg-cover bg-center" 
                         style={{backgroundImage: "url('/br.svg')"}} />
                  </div>
                }
              />
            </BentoGrid>
          </div>

          {/* Text content on the right */}
          <div className="w-full md:w-[38%] flex flex-col justify-start pt-4 font-['Alexandria']">
            <h4 className="makes-us-different-heading">What Makes Us Different</h4>
            <br/>
            <h2 className="agritech-platform-heading">AgriTech Digital Platform</h2>
            
            <div className="agritech-content">
              <p>
                While agricultural investment isn't new, our approach is. We are:
              </p>
              <ul className="list-disc pl-5 my-3">
                <li className="mb-2">Bringing "crowdfarming" to underserved regions, empowering local farmers with tools they never had access to</li>
                <li className="mb-2">Opening small-scale investments to the general public, making farming more accessible and attractive to young people</li>
                <li className="mb-2">Combining financial, environmental, and social returns into one transparent platform</li>
                <li className="mb-2">Using AI and data visualization to turn farming into a smart, trackable, and impactful digital experience</li>
              </ul>
              <p>
                We believe Plantify fits closely with NGDA's vision of digital action for societal impact. We're excited to be building something that merges sustainability, inclusion, and tech, and we hope to be part of the upcoming cohort.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br/><br/><br/>
    </section>
  )
}