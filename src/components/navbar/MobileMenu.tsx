"use client";

import { motion, AnimatePresence } from "framer-motion";
import NavLinks from "./NavLinks";
import SocialIcons from "../SocialIcons";
import ContactButton from "./ContactButton";


type NavLink = {
  href: string;
  label: string;
};

type MobileMenuProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  activeLink: string;
  setActiveLink: (link: string) => void;
  navLinks: NavLink[];
};

const containerVariants = {
  open: { transition: { staggerChildren: 0.1, staggerDirection: 1 } },
  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};

const MobileMenu = ({
  isMenuOpen,
  setIsMenuOpen,
  activeLink,
  setActiveLink,
  navLinks,
}: MobileMenuProps) => (
  <AnimatePresence>
    {isMenuOpen && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 bg-[url('/images/bkgMenu.png')] bg-cover bg-center border-t h-screen border-light py-28 z-10"
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-lighter/85 z-0" />

        <motion.div
          className="relative container text-center mx-auto px-6 space-y-3 z-10"
          variants={containerVariants}
          initial="closed"
          animate="open"
          exit="closed"
        >
          <NavLinks
            navLinks={navLinks}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            onClick={() => setIsMenuOpen(false)}
          />
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <SocialIcons />
        </div>
       <div className="absolute bottom-20 left-1/2 z-10 -translate-x-1/2 md:hidden">
  <ContactButton isMenuOpen={isMenuOpen} scrolled={false} />
   
   {/* test contact */}
</div>

      </motion.div>
    )}
  </AnimatePresence>
);

export default MobileMenu;
