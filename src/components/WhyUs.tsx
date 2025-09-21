"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhyUs() {
  const items = [
    {
      title: "Transformative Journeys",
      img: "/images/transformative.png",
      desc: "Each retreat blends world-class coaching with immersive experiences that create lasting breakthroughs in mind, body, and spirit.",
    },
    {
      title: "Destinations",
      img: "/images/destinations.png",
      desc: "From sunlit Mediterranean villas to hidden jungle sanctuaries, we handpick the world’s most breathtaking locations for your renewal.",
    },
    {
      title: "Curated Expertise",
      img: "/images/coaches.png",
      desc: "Our coaches and facilitators are leaders in wellness, leadership, and personal growth — ensuring every moment is guided with care.",
    },
        {
      title: "Luxury With Purpose",
      img: "/images/luxury.png",
      desc: "Every detail, from gourmet cuisine to bespoke accommodations, is designed to nurture both comfort and transformation.",
    },
  ];

  return (
    <section id="whyChooseUs" className="w-full">
      
      {/* HEADER with background image */}
      <div className="relative h-[300px] md:h-[400px]">
        <Image
          src="/images/soundHealing.png"
          alt="Palm trees background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <motion.h2
          className="absolute inset-0 flex items-center justify-center text-white text-3xl md:text-4xl lg:text-5xl font-extralight font-heading text-center px-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          WHY CHOOSE US
        </motion.h2>
      </div>

      {/* CONTENT GRID */}
      <div className="bg-dark px-11 md:px-6 py-16 lg:px-20 lg:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading  italic text-xl mb-4 underline underline-offset-4 decoration-white">
                {item.title}
              </h3>

              
              <div className="relative mx-auto w-64 h-40 mb-4">
              
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="absolute top-[10%] left-[10%] w-[80%] h-[70%] object-cover rounded-sm"
                />
              </div>

              <p className="text-white text-base font-body">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
