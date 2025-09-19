"use client";
import { useEffect } from "react";

import Hero from "@/components/Hero";
// import AboutMe from "@/components/AboutMe";
// import Cursos from "@/components/Cursos";
import OptionsOne from "@/components/OptionsOne";
import OptionsTwo from "@/components/OptionsTwo";
import Collage from "@/components/Collage";
import TestimonialsSection from "@/components/TestimonialsSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import OurPhilosophy from "@/components/OurPhilosophy";
import WhyUs from "@/components/WhyUs";
import NewComponentTrial from "@/components/NewComponentTrial";

const paragraph = "Your practice is not about touching your toes, it’s about what you discover on the way down.";

export default function HomePage() {
  const words = paragraph.split(" ")

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Background gradient effect */}
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-red-800/20 to-yellow-600/20 rounded-full blur-[80px] -z-10"></div>

      <Hero />
      <OurPhilosophy />
      <WhyUs />
      <NewComponentTrial paragraph={paragraph} />

      <OptionsOne />
      <OptionsTwo />
      <Collage />
      <TestimonialsSection />
      <Newsletter />
      <Footer />
    
    </main>
  );
}
