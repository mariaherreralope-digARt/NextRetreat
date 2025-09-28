'use client'
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function TextParallax({ paragraph1 }: { paragraph1: string }) {
  const container = useRef<HTMLParagraphElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.90', 'end 0.70'],
  });

  const words = (paragraph1 ?? '').split(' ');

  return (
    <div
      className="flex flex-wrap items-center justify-center font-body 
      md:h-[100vh] max-w-[1280px] px-10 md:px-50  bg-light text-darker italic text-center "
    >
      <p
        ref={container}
        className="text-3xl md:text-[64px] leading-[1.25] font-extralight"
      >
        {words.map((w, i) => (
          <Word
            key={i}
            word={w}
            index={i}
            total={words.length}
            progress={scrollYProgress}
          />
        ))}
      </p>
    </div>
  );
}


type WordProps = {
  word: string;
  index: number;
  total: number;
  progress: any; 
};

const Word = ({ word, index, total, progress }: WordProps) => {
  const start = index / total;
  const end = start + 1 / total;

  // animate opacity from 0 -> 1 as scroll progress moves through [start, end]
  const opacity = useTransform(progress, [start, end], [0, 1]);

  // keep words inline but allow absolute overlay
  return (
    <span className="relative inline-block mr-2">
      {/* shadow (always visible, low opacity) */}
      <span className="opacity-20 pointer-events-none select-none">{word}</span>

      {/* animated overlay (fades in) */}
      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0 pointer-events-none select-none"
        aria-hidden={false}
      >
        {word}
      </motion.span>
    </span>
  );
};
