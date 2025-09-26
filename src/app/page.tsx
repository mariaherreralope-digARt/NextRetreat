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
import QASection from "@/components/QASection";
import VerticalButton from "@/components/VerticalButton"; 
import GoTopButton from "@/components/GoTopButton";
import TextParallax from "@/components/TextParallax";
import TextParallaxQA from "@/components/TextParallaxQA";
import Lenis from 'lenis';

const paragraph =
  "Your journey deserves guidance you can trust, an environment that feels safe, and a space designed with intention.";

  const paragraph1 =
  "Every journey is unique — that’s why we offer retreats designed to nurture mind, body, and spirit in different ways.";

  const paragraph2 =
  "We know you may have questions — here are clear answers to help you feel confident before beginning your journey with us.";
   

 
export default function HomePage() {
  const words = paragraph.split(" ");

  useEffect(() => {
// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});


    });

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Background gradient effect */}
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-red-800/20 to-yellow-600/20 rounded-full blur-[80px] -z-10"></div>

      <Hero />
      <OurPhilosophy />
      <NewComponentTrial paragraph={paragraph} />
      <WhyUs />

      <TextParallax paragraph1={paragraph1} />

      <OptionsOne />
      <OptionsTwo />
      <TextParallaxQA paragraph2={paragraph2} />
      <QASection />

      <Collage />
      <TestimonialsSection />
      <Newsletter />
      <Footer />
      <GoTopButton />

      <VerticalButton label="Book Our Next Retreat" href="/about" />
    </main>
  );
}
