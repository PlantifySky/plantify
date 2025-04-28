"use client";
import { useEffect } from 'react';
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowToStart from "@/components/HowToStart";
import { MakeUsDif } from "@/components/MakeUsDif";
import MeetTheTeam from "@/components/MeetTheTeam";
import Ready from "@/components/Ready";
import { Analytics } from "@vercel/analytics/react"
import Greenway from "@/components/greenway";
import Accordion from "@/components/Accordian";
import NavBar from "@/components/NavBar";
import InvestorsFarmers from "@/components/InvestorsFarmers";
import '@/styles/hideScrollbar.css'; // Import CSS to hide scrollbar
export default function Home() {
  useEffect(() => {
    // Any initialization logic can stay here if needed
    // The loading functionality has been moved to app/loading.tsx
  }, []);
  
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
