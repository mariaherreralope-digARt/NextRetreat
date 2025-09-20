'use client';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface QAItem {
  question: string;
  answer: string;
}

const qaData: QAItem[] = [
  {
    question: "What is Next.js?",
    answer: "Next.js is a React framework for building fast and scalable web apps with server-side rendering and static site generation.",
  },
  {
    question: "What is Tailwind CSS?",
    answer: "Tailwind CSS is a utility-first CSS framework that lets you quickly style applications without leaving your HTML.",
  },
  {
    question: "What is Framer Motion?",
    answer: "Framer Motion is a popular React animation library that makes it simple to create fluid, powerful animations.",
  },
];

export default function QASection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative px-30 pb-10 z-0 bg-[url('/images/bkgMenu.png')] bg-cover bg-center max-w-l mx-auto">
      <div className="absolute inset-0 bg-black/70 z-1"></div>
      <div className="relative z-10 max-w-2/3 mx-auto">

      <h2 className="text-2xl font-body my-6 mx-10 text-center">Q&A Section</h2>
      <div className="space-y-4">
        {qaData.map((item, index) => (
          <div
            key={index}
            className="p-5 pl-5 mr-10px border border-darker shadow-sm bg-light/30 cursor-pointer hover:shadow-md transition"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <p className="font-heading  text-lg">{item.question}</p>
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.p
                  className="mt-2 pl-10 text-lighter font-body" 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
