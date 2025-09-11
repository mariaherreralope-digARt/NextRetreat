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
        <HiX className="w-8 h-8 bg-[#b95755] text-white rounded-full p-2 transition duration-300 hover:bg-white hover:border hover:border-[#b95755] hover:text-[#b95755]" />
      ) : (
        <HiMenu
          className={`w-8 h-8 rounded-full p-2 transition duration-300 ${
            scrolled
              ? "bg-transparent border border-[#b95755] text-[#b95755] hover:bg-[#b95755] hover:text-white"
              : "bg-white text-slate-500 hover:bg-[#b95755] hover:text-white"
          }`}
        />
      )}
    </button>
  </div>
);

export default NavMenuButton;
