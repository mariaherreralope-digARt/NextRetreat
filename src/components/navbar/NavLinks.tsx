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
        className={`block text-sm font-medium font-body py-2 ${
          activeLink === link.href
            ? "text-#b95755 hover:#869c84"
            : "text-#869c84 hover:#869c84"
        }`}
      >
        {link.label}
      </Link>
    ))}
  </>
);

export default NavLinks;
