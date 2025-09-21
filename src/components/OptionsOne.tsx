"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function OptionsOne() {
  return (
    <section id="retreats" className="w-full grid grid-cols-1 lg:grid-cols-2">
      {/* LEFT SIDE - Background image with overlay text */}
      <div className="relative h-[500px] lg:h-auto">
        <Image
          src="/images/family.png" // background image
          alt="family by the pool"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <motion.div
          className="absolute inset-0 flex items-center justify-center p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-lighter text-3xl md:text-4xl lg:text-5xl font-extralight uppercase font-heading leading-tight text-center max-w-md">
           OUR <br />Empowered Living <br />RETREATS
          </h2>
        </motion.div>
      </div>

      {/* RIGHT SIDE - Content list */}
      <div className="bg-light flex flex-col justify-center p-10 md:p-12 lg:p-16 ">
        <div className="space-y-12">
          {/* ITEM 1 */}
          <motion.div
            className="flex items-center justify-between gap-6 "
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex-1">
              <h3 className="bg-dark px-4 py-2 inline-block font-heading italic text-lg mb-2">
                Couples Connection
              </h3>
              <p className="text-darker font-body">
                A retreat to deepen intimacy, communication, and love in breathtaking, private settings.
              </p>
            </div>
            <Image
              src="/images/couples.png"
              alt="content calendar"
              width={120}
              height={120}
              className="ded-full object-cover"
            />
          </motion.div>

          {/* ITEM 2 */}
          <motion.div
            className="flex items-center justify-between gap-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex-1">
              <h3 className="bg-dark px-4 py-2 inline-block font-heading italic text-lg mb-2">
               Women’s Empowerment
              </h3>
              <p className="text-darker font-body">
                Created to empower women through coaching, sisterhood, and practices that awaken confidence and strength.
              </p>
            </div>
            <Image
              src="/images/women.png"
              alt="posting schedule"
              width={120}
              height={120}
              className=" object-cover"
            />
          </motion.div>

          {/* ITEM 3 */}
          <motion.div
            className="flex items-center justify-between gap-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex-1">
              <h3 className="bg-dark px-4 py-2 inline-block font-heading italic text-lg mb-2">
                Wellness & Longevity
              </h3>
              <p className="text-darker font-body">
                Programs centered on vitality, sleep optimization, and holistic living practices that extend health and energy.
              </p>
            </div>
            <Image
              src="/images/elders.png"
              alt="content creation"
              width={120}
              height={120}
              className=" object-cover"
            />
          </motion.div>
        </div>
      </div>
      <div className="bg-dark  h-12 max-w-7xl mx-auto"></div>

    </section>
  );
}
