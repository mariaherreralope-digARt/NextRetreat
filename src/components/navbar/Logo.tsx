"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  setActiveLink: (link: string) => void;
  isMenuOpen: boolean;
  scrolled: boolean;
};

const Logo = ({ setActiveLink, isMenuOpen, scrolled }: LogoProps) => {
  // ✅ If menu is open OR scrolled, show logo2
  const showAltLogo = isMenuOpen || scrolled;

  return (
    <div className="z-30 flex justify-center">
      <Link
        href="#inicio"
        onClick={() => setActiveLink("#inicio")}
        className="items-center mt-4 focus:outline-none focus:ring-0"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2.8, delay: 0.5 }}
          className="relative z-10 h-40 w-auto"
        >
          <Image
            src={showAltLogo ? "/images/logo2.png" : "/images/logo.png"}
            alt="Happy & Healthy"
            width={160}
            height={160}
            className="h-40 w-auto transition-opacity duration-300"
            priority
          />
        </motion.div>
      </Link>
    </div>
  );
};

export default Logo;
