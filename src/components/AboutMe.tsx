import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";


const AboutMe: FC = () => {
  return (
    <section id="quiensoy" className="max-w-8xl mx-auto px-8 md:px-24 py-16 md:pt-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
        {/* LEFT column: Text */}
        <motion.div
          className="md:w-2/5 w-full space-y-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, staggerChildren: 0.2 }}
        >
          <motion.h2
            className="text-2xl text-lighter md:text-3xl font-heading mb-0"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            Where Luxury Meets Transformation
          </motion.h2>
          <motion.h3
            className="text-lg text-btt font-body mb-4 italic"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Philosophy
          </motion.h3>
          <motion.p
            className="max-w-3xl mx-auto text-sm md:text-md font-body leading-relaxed text-light mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            At <strong>Boleh Luxury Retreats</strong>, we believe that true transformation happens when personal growth meets extraordinary environments. Our mission is to create retreats that empower individuals to pause, reset, and rise into their fullest potential. Guided by a vision of blending inner work with outer beauty, we design experiences where luxury is not excess, but a sacred container for change.


          </motion.p>
          <motion.p
            className="max-w-3xl mx-auto text-sm md:text-md font-body leading-relaxed text-light mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Founded by a team of visionaries passionate about wellness, leadership, and human potential, our coaches and facilitators bring decades of expertise in guiding others through breakthrough moments. We partner with world-class chefs, holistic practitioners, and hospitality experts to ensure every detail — from cuisine to conversation — is intentional.

          </motion.p>
          <motion.p
            className="max-w-3xl mx-auto text-sm md:text-md font-body leading-relaxed text-light mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
           
            We combine luxury and transformation because we believe deep renewal deserves both comfort and inspiration. Each retreat is an invitation to slow down, realign, and step into a more purposeful, radiant life.
          </motion.p>
       
        </motion.div>
        {/* RIGHT column: Image */}
        <motion.div
          className="md:w-3/5 w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.2 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
        >
          <Image
            src="/images/aboutImg.png"
            width={400}
            height={400}
            alt="about"
            className="w-full max-w-md mx-auto pl-4 md:pl-0 h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
