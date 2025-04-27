"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Define card type before using it
type Card = {
  title: string;
  src: string;
  id?: number;
  nameComponent?: React.ReactNode;
};

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
    showMobileInfo,
    isMobile,
    nameComponent,
  }: {
    card: Card;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    showMobileInfo?: boolean;
    isMobile?: boolean;
    nameComponent?: React.ReactNode;
  }) => (
    <div className="flex flex-col items-center w-full mb-2"> {/* Keep mb-2 to maintain name positioning */}
      <div
        onMouseEnter={() => !isMobile && setHovered(index)}
        onMouseLeave={() => !isMobile && setHovered(null)}
        onClick={() => isMobile && setHovered(hovered === index ? null : index)}
        className={cn(
          "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-52 md:h-64 w-full transition-all duration-300 ease-out", /* Decreased height from h-60/h-96 to h-52/h-64 */
          hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
        )}
      >
        <Image
          src={card.src}
          alt={card.title}
          className="object-contain w-full h-full"
          width={500}
          height={500}
          onError={(e) => {
            console.error(`Failed to load image: ${card.src}`);
            // Can't set src directly on next/image, need a different approach for fallbacks
          }}
        />
        {/* Show overlay only on desktop if showMobileInfo is true */}
        <div
          className={cn(
            "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
            hovered === index ? "opacity-100" : "opacity-0",
            showMobileInfo && "md:flex hidden"
          )}
        >
          <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
            {card.title}
          </div>
        </div>
      </div>
      
      {/* Display name component with reduced spacing */}
      {isMobile && nameComponent && (
        <div className="w-full flex justify-center mt-2"> {/* Decreased from mt-6 to mt-2 */}
          {nameComponent}
        </div>
      )}
    </div>
  )
);

Card.displayName = "Card";

export function FocusCards({ 
  cards,
  customClass,
  showMobileInfo,
  initialFocusIndex = null,
  renderName,
}: { 
  cards: Card[];
  customClass?: string;
  showMobileInfo?: boolean;
  initialFocusIndex?: number | null;
  renderName?: (index: number) => React.ReactNode;
}) {
  const [hovered, setHovered] = useState<number | null>(initialFocusIndex);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className={cn(
      "grid grid-cols-1 md:grid-cols-3 gap-14 max-w-6xl mx-auto w-full py-4",
      customClass,
      isMobile ? "mobile-layout" : ""
    )}>
      {isMobile ? (
        // Mobile layout - First card featured, others in 2x2 grid
        <>
          {/* Featured card */}
          {cards.length > 0 && (
            <div key={`${cards[0].title}-featured`} className="featured-card">
              <Card
                card={cards[0]}
                index={0}
                hovered={hovered}
                setHovered={setHovered}
                showMobileInfo={showMobileInfo}
                isMobile={isMobile}
                nameComponent={renderName && renderName(0)}
              />
            </div>
          )}
          
          {/* Other cards in 2x2 grid */}
          <div className="grid-cards">
            {cards.slice(1).map((card, i) => {
              const index = i + 1;
              return (
                <div key={`${card.title}-${index}`} className="flex flex-col items-center">
                  <Card
                    card={card}
                    index={index}
                    hovered={hovered}
                    setHovered={setHovered}
                    showMobileInfo={showMobileInfo}
                    isMobile={isMobile}
                    nameComponent={renderName && renderName(index)}
                  />
                </div>
              );
            })}
          </div>
        </>
      ) : (
        // Desktop layout - All cards in regular grid
        cards.map((card, index) => (
          <div key={`${card.title}-${index}`} className="flex flex-col items-center">
            <Card
              card={card}
              index={index}
              hovered={hovered}
              setHovered={setHovered}
              showMobileInfo={showMobileInfo}
              isMobile={isMobile}
              nameComponent={renderName && renderName(index)}
            />
          </div>
        ))
      )}
    </div>
  );
}
