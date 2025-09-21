"use client";

import { motion } from "framer-motion";
import { useModal } from "../../context/ModalContext";

type ContactButtonProps = {
  isMenuOpen: boolean;
  scrolled: boolean;   // new prop
};

const ContactButton = ({ isMenuOpen, scrolled }: ContactButtonProps) => {
  const { openModal } = useModal();

  // base button style (border + text)
  const baseClass = isMenuOpen
    ? "bg-btt text-light"
    : scrolled
      ? "bg-transparent text-btt border border-btt"
      : "bg-light text-btt";

  return (
    <div className="flex-1 justify-end z-30 hidden md:flex">
      <motion.button
        onClick={openModal}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover="hover"
        variants={{}}
        className={`relative overflow-hidden text-sm px-6 py-2.5 group uppercase transition-colors duration-300 ${baseClass}`}
      >
        {/* background animation layer */}
        <motion.span
          className={`absolute inset-0 ${
            isMenuOpen
              ? "bg-light"
              : "bg-btt"
          }`}
          initial={isMenuOpen ? { x: "100%" } : { x: "-100%" }}
          variants={{
            hover: {
              x: 0,
              transition: { duration: 0.4, ease: "easeInOut" },
            },
          }}
        />

        {/* button text */}
        <span
          className={`relative z-10 transition-colors duration-300 text-bold ${
            isMenuOpen
              ? "text-bold group-hover:text-btt"
              : scrolled
                ? "text-btt group-hover:text-light"
                : "text-darker text-bold group-hover:text-light"
          }`}
        >
          Contact
        </span>
      </motion.button>
    </div>
  );
};

export default ContactButton;
