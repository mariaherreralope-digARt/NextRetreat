import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: " – ",
    text: "This retreat was life-changing — I arrived exhausted, and left with clarity, energy, and a deep sense of renewal.",
  },
  {
    id: 2,
    name: "– ",
    text: "Every detail was thought through with such care. It was luxury, but also soulful and purposeful",
  },
  {
    id: 3,
    name: " –",
    text: "The coaches created a safe, inspiring space that helped me unlock breakthroughs I’ve been chasing for years.",
  },
  {
    id: 4,
    name: " – ",
    text: "I’ve been to many retreats before, but nothing compares to the transformation I experienced here.",
  },
  {
    id: 5,
    name: " – ",
    text: "From the food to the location to the people — everything exceeded my expectations. I can’t wait for the next one.",
  },
];

const TestimonialsSection: FC = () => {
  return (
    <section
      id="testimonios"
      className="py-16 px-14  inset-0 z-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent max-w-7xl mx-auto "
    >
      <motion.div className="text-center mb-12">
        <motion.h2 className="text-2xl text-lighter md:text-3xl font-heading mb-0">
          What They Say
        </motion.h2>
        <motion.p className="text-lg text-btt font-body italic mb-4">
          Inspiring words from those who transformed with us.
        </motion.p>
      </motion.div>
      <div className="relative">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
          modules={[Navigation]}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white/20 p-8 rounded-lg shadow-md text-center max-w-2xl mx-auto relative z-0">
                <p className="text-light mb-4 font-body text-sm md:text-md leading-relaxed">
                  "{testimonial.text}"
                </p>
                <h4 className="text-primary font-heading">{testimonial.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-btt text-white p-3 rounded-full cursor-pointer hover:bg-light shadow-md z-10">
          <BsChevronLeft className="size-5" />
        </div>
        <div className="custom-next absolute right-0 top-1/2 transform -translate-y-1/2 bg-btt text-white p-3 rounded-full cursor-pointer hover:bg-light shadow-md z-10">
          <BsChevronRight className="size-5" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
