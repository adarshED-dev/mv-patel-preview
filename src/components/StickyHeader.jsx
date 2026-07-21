import logo from '../assets/logo.png'
import React, { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Brands", href: "/brands" },
  { label: "Outlets", href: "/outlets" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full header-wrapper fixed top-0 z-[9] w-full transition-all duration-300 ${
        isScrolled ? "bg-black/70 backdrop-blur-md py-3 shadow-md" : "bg-transparent py-4"
      }`}
    >
      <div className="page-width inner-wrapper mx-auto flex w-full max-w-7xl items-center justify-between px-6">
        {/* Logo — left */}
        <div className="header-logo shrink-0">
          <a href="/" className="inline-block transition-transform duration-300 hover:scale-105">
            <img src={logo} alt="mv-patel-logo" className="w-[13rem] h-auto" />
          </a>
        </div>

        {/* Desktop nav — right */}
        <nav className="hidden md:block">
          <ul className="menu--lists flex items-center gap-8">
            {NAV_LINKS.map((link, i) => (
              <li key={i} className="li-menu">
                <a
                  href={link.href}
                  className="group relative uppercase tracking-[1px] text-sm text-white transition-colors duration-300 hover:text-blue-300"
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 h-px w-0 bg-blue-300 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
          className="md:hidden text-white transition-transform duration-300 active:scale-90"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile nav dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          mobileOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-1 bg-black/80 backdrop-blur-md py-4">
          {NAV_LINKS.map((link, i) => (
            <li key={i} className="li-menu w-full text-center">
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block w-full py-3 uppercase tracking-[1px] text-sm text-white transition-colors duration-300 hover:bg-white/10 hover:text-blue-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default StickyHeader;