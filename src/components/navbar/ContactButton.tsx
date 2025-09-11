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
    ? "bg-[#b95755] text-white"
    : scrolled
      ? "bg-transparent text-[#b95755] border border-[#b95755]"
      : "bg-white text-[#b95755]";

  return (
    <div className="flex-1 flex justify-end z-30">
      <motion.button
        onClick={openModal}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover="hover"
        variants={{}}
        className={`relative overflow-hidden text-sm px-6 py-2.5 group font-light uppercase transition-colors duration-300 ${baseClass}`}
      >
        {/* background animation layer */}
        <motion.span
          className={`absolute inset-0 ${
            isMenuOpen
              ? "bg-white"
              : "bg-[#b95755]"
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
          className={`relative z-10 transition-colors duration-300 ${
            isMenuOpen
              ? "text-white group-hover:text-[#b95755]"
              : scrolled
                ? "text-[#b95755] group-hover:text-white"
                : "text-black group-hover:text-white"
          }`}
        >
          Contact
        </span>
      </motion.button>
    </div>
  );
};

export default ContactButton;
