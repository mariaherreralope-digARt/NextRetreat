"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function OptionsTwo() {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2">
   

      {/* LEFT SIDE - Content list */}
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
                Mindful Awakening
              </h3>
              <p className="text-darker font-body">
                Reconnect with inner peace through yoga, meditation, and daily practices that ground you in the present moment.
              </p>
            </div>
            <Image
              src="/images/mind.png"
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
               Holistic Health Reset
              </h3>
              <p className="text-darker font-body">
                A full-body recharge combining nutrition, detox programs, spa therapies, and energy-balancing practices.
              </p>
            </div>
            <Image
              src="/images/body.png"
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
                Business Clarity Retreat
              </h3>
              <p className="text-darker font-body">
                Focused days for entrepreneurs and creatives to reset, strategize, and design future growth with expert guidance.
              </p>
            </div>
            <Image
              src="/images/vision.png"
              alt="content creation"
              width={120}
              height={120}
              className=" object-cover"
            />
          </motion.div>
        </div>
      </div>

         {/* RIGHT SIDE - Background image with overlay text */}
      <div className="relative h-[500px] lg:h-auto">
        <Image
          src="/images/MindBodyVisionBkg.png" // background image
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
          <h2 className="text-lighter text-3xl md:text-4xl lg:text-5xl font-extralight  font-heading uppercase leading-tight text-center max-w-md">
           OUR <br />Mind, Body & Vision <br />RETREATS
          </h2>
        </motion.div>
      </div>
      <div className="bg-dark  h-12 max-w-7xl mx-auto"></div>

    </section>
  );
}
