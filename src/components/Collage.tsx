
"use client";

import { motion } from "framer-motion";

const images = [
  "/images/collage1.png",
  "/images/collage2.png",
  "/images/collage3.png",
  "/images/collage4.png",
  "/images/collage5.png",
  "/images/collage6.png",
  "/images/collage7.png",
  "/images/collage8.png",
  "/images/collage9.png",
];

export default function Collage() {
  return (
    <section id="explore" className="bg-light py-16 px-10 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE - IMAGE GRID */}
        <motion.div
          className="grid grid-cols-3 gap-2 px-4 py-7"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              className="overflow-hidden shadow-md"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={src}
                alt={`collage image ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* RIGHT SIDE - TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="italic text-darker font-body mb-2">
            Find the Journey <br />
            <span className="not-italic">to Your Best Self</span>
          </p>
          <hr className="border-darker mb-6 w-3/4" />
          <h2 className="text-5xl uppercase font-heading mb-6 leading-tight text-darker">
            Explore <br />Our Choices 
          </h2>
          <p className="text-lg text-darker font-body leading-relaxed">
          Beyond our retreats, our curated courses guide you to integrate balance, clarity, and inspiration into everyday life. Learn at your own pace, with the same depth and elegance that define each of our experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
