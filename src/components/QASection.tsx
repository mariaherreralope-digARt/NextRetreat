'use client';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface QAItem {
  question: string;
  answer: string;
}

const qaData: QAItem[] = [
  { question: "What makes your retreats different from others?", answer: "Our retreats are designed with intention. Every detail — from the setting to the website where you first discover us — reflects calm, trust, and authenticity. We create spaces where body, mind, and spirit align." },
  { question: "How do I book a retreat?", answer: "Booking is simple and secure through our website. Just select your retreat, choose your dates, and reserve your spot in a few clicks." },
  { question: "Do I need previous experience in yoga or wellness practices?", answer: "Not at all. Our retreats are created for everyone — from beginners to advanced practitioners. You’ll always be guided with care and respect for your own pace." },
  { question: "What is included in the retreat price?", answer: "Each retreat includes accommodation, meals, daily practices, and guided sessions. Some retreats also offer workshops, excursions, or wellness treatments — details are always listed on the retreat page." },
  { question: "Can I attend alone?", answer: "Yes, many of our guests come solo. Retreats are a wonderful way to connect with like-minded people while also having space for personal reflection." },
  { question: "Are the retreats suitable for couples or groups?", answer: "Absolutely. Whether you’re joining with a partner, friend, or group, our retreats are designed to nurture both individual and shared experiences." },
  { question: "How do I know which retreat is right for me?", answer: "Each retreat has its own focus — from yoga and meditation to holistic health or coaching. On our website, you’ll find detailed descriptions to help you choose the one that best aligns with your current journey." },
  { question: "What should I bring with me?", answer: "Comfortable clothing for practice, personal items, and an open mind. A full packing list will be sent to you once your booking is confirmed." },
  { question: "What happens if I need to cancel my reservation?", answer: "We understand that plans can change. Each retreat has its own cancellation policy, clearly explained during booking, so you know exactly what to expect." },
  { question: "How do I stay connected after the retreat?", answer: "Our retreats don’t end when you leave. We provide resources, practices, and ways to stay in touch with the community — so your journey continues long after." },
];

export default function QASection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div
      id="qaSection"
      className="relative px-10 md:px-30 pb-10 z-0 
      bg-[url('/images/bkgMenu.png')] bg-cover bg-center max-w-l mx-auto"
    >
      <div className="absolute inset-0 bg-black/70 z-1"></div>
      <div className="relative z-10 max-w-full md:max-w-2/3 mx-auto">
        <h2 className="text-5xl pt-16 uppercase font-heading mb-6 leading-tight text-darker">
          Q&A Section
        </h2>

        <div className="space-y-1.5">
          {qaData.map((item, index) => {
            const isOpen = activeIndex === index || hoveredIndex === index;
            return (
              <div
                key={index}
                className="py-3 pl-5 mr-0 md:mr-10px border border-darker shadow-sm
                 bg-light/30 cursor-pointer hover:shadow-md transition"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <p className="font-heading  text-lg">{item.question}</p>
                <AnimatePresence>
                  {isOpen && (
                    <motion.p
                      className="mt-2 pl-1 md:pl-10 text-lighter font-body"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
