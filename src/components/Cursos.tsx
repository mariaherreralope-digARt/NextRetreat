import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const Cursos = () => {
  const levels = [
    { icon: "/images/MindfulAwakening.png", title: "Mindful Awakening", description: "Reconnect with inner peace through yoga, meditation, and daily practices that ground you in the present moment.", overlayColor: "rgba(255, 243, 228, 0.7)" },
    { icon: "/images/LeadershipLegacy.png", title: "Leadership & Legacy", description: "Designed for entrepreneurs and executives ready to expand vision, sharpen clarity, and lead with authenticity.", overlayColor: "rgba(255, 243, 228, 0.7)" },
    { icon: "/images/HolisticHealthReset.png", title: "Holistic Health Reset", description: "A full-body recharge combining nutrition, detox programs, spa therapies, and energy-balancing practices.", overlayColor: "rgba(255, 243, 228, 0.7)" },
    { icon: "/images/CouplesConnection.png", title: "Couples Connection", description: "A retreat to deepen intimacy, communication, and love in breathtaking, private settings.", overlayColor: "rgba(255, 243, 228, 0.7)" },
    { icon: "/images/WomenEmpowerment.png", title: "Women’s Empowerment", description: "Created to empower women through coaching, sisterhood, and practices that awaken confidence and strength.", overlayColor: "rgba(255, 243, 228, 0.7)" },
    { icon: "/images/SacredHealingJourney.png", title: "Sacred Healing Journey", description: "A spiritual immersion with breathwork, sound healing, and ancestral practices that restore balance to soul and body.", overlayColor: "rgba(255, 243, 228, 0.7)" },
     { icon: "/images/NatureAdventure.png", title: "Nature & Adventure Immersion", description: "Blend luxury with adventure — guided hikes, ocean exploration, and mindful connection with the natural world.", overlayColor: "rgba(255, 243, 228, 0.7)" },
    { icon: "/images/BusinessClarity.png", title: "Business Clarity Retreat", description: "Focused days for entrepreneurs and creatives to reset, strategize, and design future growth with expert guidance.", overlayColor: "rgba(255, 243, 228, 0.7)" },
    { icon: "/images/WellnessLongevity.png", title: "Wellness & Longevity", description: "Programs centered on vitality, sleep optimization, and holistic living practices that extend health and energy.", overlayColor: "rgba(255, 243, 228, 0.7)" },
  ];

  const levelsRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(levelsRef, { margin: "-100px" });
  const MotionImage = motion(Image);

  return (
    <section id="cursos" className="max-w-7xl mx-auto px-16 md:px-14 py-16 bg-cover bg-center relative opacity-90">
      <div className="text-center mb-16
       drop-shadow-md">
        <h2 className="text-2xl text-lighter md:text-3xl font-heading">The Retreat Collection</h2>
        <p className="text-lg text-btt font-body mt-4 italic">
          Discover immersive programs crafted for mind, body, and soul.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8" ref={levelsRef}>
        {levels.map((level, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col text-center items-center justify-center p-6 overflow-hidden shadow-lg"
            style={{ backgroundColor: "transparent" }}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.15 }}
          >
            {/* Overlay */}
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: level.overlayColor,
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                zIndex: 0,
              }}
            />
            {/* Icon */}
            <motion.div
              className="relative w-16 h-16 mt-6 mb-6 flex items-center justify-center z-10 rounded-tr-3xl rounded-bl-3xl shadow-lg bg-btt/40"
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.15, type: "spring", stiffness: 500 }}
            >
              <MotionImage
                src={level.icon}
                alt={`${level.title} icon`}
                width={144}
                height={144}
                className="w-36 h-36 object-contain"
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                whileHover={{ scale: 1.2, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.15 + 0.2 }}
              />
            </motion.div>
            {/* Title */}
            <motion.h3
              className="text-2xl font-medium font-heading mb-3 relative z-10 text-darker drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
            >
              {level.title}
            </motion.h3>
            {/* Description */}
            <motion.p
              className="text-darker
               font-body text-center relative z-10 drop-shadow-md max-w-3xl mx-auto text-sm md:text-md leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
            >
              {level.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Cursos;
