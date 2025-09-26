"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function OurPhilosophy() {
  return (
    <section id="ourPhilosophy" className="w-full bg-light  pt-12  lg:pt-18">
      <div className=" px-11 md:px-6 lg:px-20 mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-extralight font-heading leading-tight mb-6 text-dark uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our<br />Philosophy
          </motion.h2>

          <motion.p
             className="max-w-3xl mx-auto text-md md:text-lg font-body text-darker mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
             At <strong>Boleh Luxury Retreats</strong>, we believe that true transformation happens when personal growth meets extraordinary environments. Our mission is to create retreats that empower individuals to pause, reset, and rise into their fullest potential. Guided by a vision of blending inner work with outer beauty, we design experiences where luxury is not excess, but a sacred container for change.


          </motion.p>
          <motion.p
            className="max-w-3xl mx-auto text-md md:text-lg font-body  text-darker mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Founded by a team of visionaries passionate about wellness, leadership, and human potential, our coaches and facilitators bring decades of expertise in guiding others through breakthrough moments. We partner with world-class chefs, holistic practitioners, and hospitality experts to ensure every detail — from cuisine to conversation — is intentional.

          </motion.p>

          <div className="flex sm:gap-2 md:gap-4 mt-6">
            <Image
              src="/images/retreat.png"
              alt="content example"
              width={160}
              height={120}
              className="object-cover"
            />
            <Image
              src="/images/relax.png"
              alt="content example"
              width={160}
              height={120}
              className=" object-cover"
            />
          </div>
        </div>

        {/* RIGHT LAPTOP IMAGE */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="w-full max-w-lg">
            <Image
              src="/images/aboutImg.png"
              alt="laptop frame"
              width={800}
              height={500}
              className="w-full"
            />
            {/* Inner image (woman on hammock) */}
            {/* <Image
              src="/images/aboutImg.jpg"
              alt="woman relaxing"
              width={700}
              height={400}
              className="absolute top-[8%] left-[9%] w-[82%] h-[77%] object-cover rounded-md"
            /> */}
             <div className="mt-6 grid sm:grid-cols-1 md:grid-cols-2 gap-4 font-body ">
            <p className="italic text-darker  text-md md:text-lg ">
              We combine luxury and transformation because we believe deep renewal deserves both comfort and inspiration.
            </p>
            <p className="text-darker text-md md:text-lg">
              Each retreat is an invitation to slow down, realign, and step into a more purposeful, radiant life.
            </p>
          </div>
          </div>
        </motion.div>
      </div>
      <div className="bg-dark mt-12 h-12 max-w-7xl mx-auto"></div>
    </section>
  );
}
