"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS_LEFT, NAV_LINKS_RIGHT } from "@/lib/navigation";
import LogoFull from "@/components/logos/LogoFull";

const LINK_CLASSES =
  "font-body text-sm font-semibold uppercase tracking-[0.15em] transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4";

function NavLinks({ links, colorClass, onNavigate, justifyClass }) {
  return (
    <ul className={`hidden min-w-0 items-center gap-8 lg:flex ${justifyClass}`}>
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            onClick={onNavigate}
            className={`${LINK_CLASSES} ${colorClass}`}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 72);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const colorClass = transparent ? "text-cream" : "text-moss";
  const logoStyle = transparent
    ? { "--logo-ink": "#F4F1EA", "--logo-bg": "#3B3B1B" }
    : { "--logo-ink": "#545427", "--logo-bg": "#F4F1EA" };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        transparent
          ? "bg-transparent"
          : "border-b border-moss/10 bg-cream/95 backdrop-blur"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 py-5 sm:px-6 sm:py-6 md:py-7 lg:px-10 lg:py-9 xl:py-10"
      >
        <NavLinks links={NAV_LINKS_LEFT} colorClass={colorClass} justifyClass="justify-start" />

        <Link
          href="/"
          aria-label="Hannah Thompson Photo Co. — Home"
          className="col-start-2 shrink-0 justify-self-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          <LogoFull className="h-40 w-auto sm:h-52 md:h-64 lg:h-80 xl:h-96" style={logoStyle} />
        </Link>

        <div className="col-start-3 flex min-w-0 items-center justify-end gap-6">
          <NavLinks links={NAV_LINKS_RIGHT} colorClass={colorClass} justifyClass="justify-end" />

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-md p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 lg:hidden ${colorClass}`}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-moss/10 bg-cream lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4 sm:px-6">
              {[...NAV_LINKS_LEFT, ...NAV_LINKS_RIGHT].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block min-h-11 rounded-md px-2 py-3 font-body text-base font-semibold uppercase tracking-[0.1em] text-moss transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
