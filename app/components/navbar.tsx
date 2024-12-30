"use client";

import { motion } from "motion/react";
import { User, Mail, BookOpen, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import logo from "@/images/logo.png";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isHomePage = pathname === "/";

  const links = [
    { icon: BookOpen, label: "Benefits", href: "benefits" },
    { icon: Menu, label: "Activities", href: "activities" },
    { icon: User, label: "About Us", href: "aboutUs" },
    { icon: Mail, label: "Contact Us", href: "contactUs" },
  ];

  const handleSectionClick = (href: string) => {
    setIsOpen(false);
    if (!isHomePage) {
      router.push(`/?scrollTo=${href}`);
    }
  };
  
  const renderLink = (link: { icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; label: string; href: string }) => {
    const Icon = link.icon;
    const isExternalLink = link.href.startsWith("/");
  
    if (isExternalLink) {
      return (
        <Link
          key={link.label}
          href={link.href}
          className="flex items-center gap-2 text-gray-300 hover:scale-105 hover:text-[#00ffff] transition-colors"
          onClick={() => setIsOpen(false)}
        >
          <Icon width={20} height={20} />
          <span>{link.label}</span>
        </Link>
      );
    }
  
    if (!isHomePage) {
      return (
        <button
          key={link.label}
          onClick={() => handleSectionClick(link.href)}
          className="flex items-center gap-2 text-gray-300 hover:scale-105 hover:text-[#00ffff] transition-colors"
        >
          <Icon width={20} height={20} />
          <span>{link.label}</span>
        </button>
      );
    }
  
    return (
      <ScrollLink
        key={link.label}
        to={link.href}
        spy={true}
        smooth={true}
        offset={-64}
        duration={500}
        className="flex items-center gap-2 text-gray-300 hover:105 hover:text-[#00ffff] transition-colors cursor-pointer"
        onClick={() => setIsOpen(false)}
      >
        <Icon width={20} height={20} />
        <span>{link.label}</span>
      </ScrollLink>
    );
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 bg-black backdrop-blur-md z-50 border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" aria-label="Home">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 text-[#00ffff] font-bold text-xl"
            >
              <Image src={logo} alt="logo" height={90} width={90} />
            </motion.div>
          </Link>

          {/* Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => renderLink(link))}
          </div>

          {/* Mobile Menu */}
          <button
            aria-label="Menu"
            className="md:hidden text-gray-300 hover:text-[#00ffff]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu Content */}
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-2 bg-black shadow-lg rounded-lg p-4 absolute right-0 top-16 w-48"
          >
            <div className="flex flex-col gap-4">{links.map((link) => renderLink(link))}</div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
