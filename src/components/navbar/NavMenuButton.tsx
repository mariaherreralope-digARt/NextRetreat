"use client";

import { HiMenu, HiX } from "react-icons/hi";

type NavMenuButtonProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  scrolled: boolean;   // new prop
};

const NavMenuButton = ({ isMenuOpen, setIsMenuOpen, scrolled }: NavMenuButtonProps) => (
  <div className="z-30 flex-1">
    <button
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="p-2 focus:outline-none"
      aria-label="Toggle menu"
    >
      {isMenuOpen ? (
        <HiX className="w-8 h-8 bg-btt text-light rounded-full p-2 transition duration-300 hover:bg-light hover:border hover:border-btt hover:text-btt" />
      ) : (
        <HiMenu
          className={`w-8 h-8 rounded-full p-2 transition duration-300 ${
            scrolled
              ? "bg-transparent border border-btt text-btt hover:bg-btt hover:text-lighter"
              : "bg-lighter text-darker hover:bg-btt hover:text-lighter"
          }`}
        />
      )}
    </button>
  </div>
);

export default NavMenuButton;
