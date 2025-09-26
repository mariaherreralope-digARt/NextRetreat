"use client";

import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { motion } from "framer-motion";

type Testimonial = {
  id: number;
  name: string;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "– ",
    text: "This retreat was life-changing — I arrived exhausted, and left with clarity, energy, and a deep sense of renewal.",
  },
  {
    id: 2,
    name: "– ",
    text: "Every detail was thought through with such care. It was luxury, but also soulful and purposeful",
  },
  {
    id: 3,
    name: "–",
    text: "The coaches created a safe, inspiring space that helped me unlock breakthroughs I’ve been chasing for years.",
  },
  {
    id: 4,
    name: "– ",
    text: "I’ve been to many retreats before, but nothing compares to the transformation I experienced here.",
  },
  {
    id: 5,
    name: "– ",
    text: "From the food to the location to the people — everything exceeded my expectations. I can’t wait for the next one.",
  },
];

const TestimonialsSection: FC = () => {
  return (
    <section
      id="testimonials"
      className="relative py-16 px-14 inset-0 z-0 bg-[url('/images/testimonialsBkg.png')] bg-cover bg-center max-w-7xl mx-auto"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Heading */}
      <motion.div
        className="text-center  mb-12 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight font-heading uppercase text-lighter mb-0">
          What They Say
        </h2>
        <p className="text-lg text-light font-body italic mb-4">
          Inspiring words from those who transformed with us.
        </p>
      </motion.div>

      {/* Swiper */}
      <div className="relative z-10">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
          modules={[Navigation]}
          className="testimonial-swiper"
          speed={1200}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white/20 p-8 rounded-lg shadow-md text-center max-w-2xl mx-auto relative z-0">
                <p className="text-light mb-4 font-body text-md md:text-lg leading-relaxed">
                  "{testimonial.text}"
                </p>
                <h4 className="text-light  font-body">{testimonial.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons */}
        <div className="custom-prev absolute -left-5 md:left-0 top-1/2 -translate-y-1/2 bg-btt text-white p-3 rounded-full cursor-pointer hover:bg-light shadow-md z-10">
          <BsChevronLeft className="text-xl" />
        </div>
        <div className="custom-next absolute -right-5 md:right-0 top-1/2 -translate-y-1/2 bg-btt text-white p-3 rounded-full cursor-pointer hover:bg-light shadow-md z-10">
          <BsChevronRight className="text-xl" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
