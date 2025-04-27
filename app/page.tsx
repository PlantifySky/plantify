"use client";

import { useState, useEffect } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowToStart from "@/components/HowToStart";
import { MakeUsDif } from "@/components/MakeUsDif";
import MeetTheTeam from "@/components/MeetTheTeam";
import Ready from "@/components/Ready";
import Greenway from "@/components/greenway";
import Accordion from "@/components/Accordian";
import NavBar from "@/components/NavBar";
import InvestorsFarmers from "@/components/InvestorsFarmers";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or actual data fetching
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Show loading for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden">
      <div className="w-full">
        <NavBar/>
        <div id="hero">
          <Hero />
        </div>
        <div id="none">
          <HowToStart/>
        </div>
        <div id="about">
          <MakeUsDif/>
        </div>
        <div id="greenway">
          <Greenway />
        </div>
        <div id="roadmap">
          <InvestorsFarmers/>
        </div>
        <div id="team">
          <MeetTheTeam /> 
        </div>
        <div id="ready">
          <Ready />
        </div>
        <div id="faq">
          <Accordion/>
        </div>
        <Footer />
      </div>
    </main>
  );
}
