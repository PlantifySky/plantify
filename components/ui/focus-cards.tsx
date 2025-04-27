"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

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
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    showMobileInfo?: boolean;
    isMobile?: boolean;
    nameComponent?: React.ReactNode;
  }) => (
    <div className="flex flex-col">
      <div
        onMouseEnter={() => !isMobile && setHovered(index)}
        onMouseLeave={() => !isMobile && setHovered(null)}
        onClick={() => isMobile && setHovered(hovered === index ? null : index)}
        className={cn(
          "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-44 md:h-72 w-full transition-all duration-300 ease-out",
          hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
        )}
      >
        <img
          src={card.src}
          alt={card.title}
          className="object-contain w-full h-full"
          onError={(e) => {
            console.error(`Failed to load image: ${card.src}`);
            e.currentTarget.src = "/placeholder-fallback.svg";
            e.currentTarget.onerror = null;
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
      
      {/* Display name component if provided (for mobile view) */}
      {isMobile && nameComponent}
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
  id?: number;
  nameComponent?: React.ReactNode;
};

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
      "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full", 
      customClass
    )}>
      {cards.map((card, index) => (
        <Card
          key={`${card.title}-${index}`}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
          showMobileInfo={showMobileInfo}
          isMobile={isMobile}
          nameComponent={renderName && renderName(index)}
        />
      ))}
    </div>
  );
}
