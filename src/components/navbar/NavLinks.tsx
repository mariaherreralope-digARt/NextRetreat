"use client";
import Link from "next/link";

type NavLink = {
  href: string;
  label: string;
};

type NavLinksProps = {
  navLinks: NavLink[];
  activeLink: string;
  setActiveLink: (link: string) => void;
  onClick?: () => void;
};

const NavLinks = ({ navLinks, activeLink, setActiveLink, onClick }: NavLinksProps) => (
  <>
    {navLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        onClick={() => {
          setActiveLink(link.href);
          if (onClick) onClick();
        }}
        className={`block font-medium font-body sm:text-sm md:text-md py-2 ${
          activeLink === link.href
            ? "text-btt hover:text-btt/30"
            : "text-darker hover:text-darker/70"
        }`}
      >
        {link.label}
      </Link>
    ))}
  </>
);

export default NavLinks;
