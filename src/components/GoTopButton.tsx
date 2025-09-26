"use client";

import React, { useEffect, useState } from "react";
import { BsChevronUp } from "react-icons/bs";

const GoTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-6 p-1 md:p-3 rounded-full bg-transparent
       text-btt border-btt border  hover:bg-btt/30 transition-all duration-300"
      aria-label="Back to top"
    >
      <BsChevronUp size={24} />
    </button>
  );
};

export default GoTopButton;
