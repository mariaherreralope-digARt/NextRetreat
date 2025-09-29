'use client'
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function NewComponentTrial({ paragraph }: { paragraph: string }) {
  // console.log("Paragraph prop:", paragraph);
  const container = useRef<HTMLParagraphElement | null>(null);

  // observe container scroll progress
  const { scrollYProgress } = useScroll({
    target: container,
    // animate across the container's scroll through the viewport
    offset: ['start 0.90', 'end 0.70'],
  });

  const words = (paragraph ?? '').split(' ');

  return (
    <div
      className="flex flex-wrap items-center justify-center font-body 
      h-[100vh] max-w-[1280px] px-10 md:px-50
      bg-dark text-lighter italic text-center "
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

/**
 * Word component:
 * - renders the shadow (static, low opacity)
 * - renders the motion overlay word (absolute, opacity driven by scroll)
 */
type WordProps = {
  word: string;
  index: number;
  total: number;
  progress: any; // motion value
};

const Word = ({ word, index, total, progress }: WordProps) => {
  // range for this word's reveal (0..1 based on word position)
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
