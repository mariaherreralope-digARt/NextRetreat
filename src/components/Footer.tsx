import { FC } from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import Image from "next/image";

const footerLinks: Record<string, { name: string; href: string }[]> = {
  Explore: [
    { name: "Retreats", href: "/retreats" },
    { name: "Coaches & Facilitators", href: "/coaches" },
    { name: "Destinations", href: "/destinations" },
    { name: "Calendar", href: "/calendar" },
  ],
  About: [
    { name: "Our Story", href: "/about" },
    { name: "Our Philosophy", href: "/about#philosophy" },
    { name: "FAQ", href: "/faq" },
    { name: "Journal", href: "/blog" },
  ],
  Contact: [
    { name: "Contact", href: "/contact" },
    { name: "Newsletter", href: "/newsletter" },
    { name: "Follow Us", href: "/#social" },
    { name: "Events", href: "/events" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "/legal/privacy" },
    { name: "Terms & Conditions", href: "/legal/terms" },
    { name: "Legal Notice", href: "/legal" },
  ],
};

const Footer: FC = () => {
  return (
    <footer className="bg-dark">
      <div className="mx-auto px-10 md:px-6 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="flex gap-2 items-center mb-4">
              {/* <Image
                src="/images/logo-footer.png"
                alt="Logo Luxury Retreats"
                width={48}
                height={48}
                className="h-12 rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300 object-contain"
              /> */}
              <span className="text-xl font-heading font-extralight uppercase text-lighter">
                Boleh Luxury Retreats
              </span>
            </div>
            <p className="text-light mb-6 font-body md:w-3/4">
              Curated retreats that blend luxury and transformation. Inspiring
              journeys guided by world-class coaches, hosted in the world’s most
              extraordinary destinations.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-lighter rounded-full flex items-center justify-center text-btt hover:bg-light hover:text-dark transition-all duration-200"
              >
                <FaFacebookF className="size-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-light rounded-full flex items-center justify-center text-gray-600 hover:bg-btt hover:text-dark transition-all duration-200"
              >
                <FaInstagram className="size-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-secondary hover:text-white transition-all duration-200"
              >
                <FaTiktok className="size-5" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="text-lg mb-4 uppercase font-heading text-lighter font-extralight">
                    {category}
                  </h3>
                  <ul className="space-y-2">
                    {links.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-light font-body hover:text-lighter"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 font-body text-sm">
              © {new Date().getFullYear()} Boleh Luxury Retreats. All rights
              reserved.
            </p>
            <p className="text-gray-600 text-sm">
              Website crafted by digARt – María Herrera ✨
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
