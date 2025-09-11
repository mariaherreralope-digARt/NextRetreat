"use client";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Cursos from "@/components/Cursos";
import TestimonialsSection from "@/components/TestimonialsSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Background gradient effect */}
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-red-800/20 to-yellow-600/20 rounded-full blur-[80px] -z-10"></div>

      <div className="overflow-hidden">
        <Hero />
        <AboutMe />
        <Cursos />
        <TestimonialsSection />
        <Newsletter />
        <Footer />
      </div>
    </main>
  );
}
