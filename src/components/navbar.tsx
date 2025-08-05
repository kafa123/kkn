'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-cyan-200' : 'bg-black/15'
      }`}
    >
      <nav
        className={`max-w-7xl mx-auto px-4 py-4 flex justify-between items-center ${
          isScrolled ? 'text-black' : 'text-white'
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Image
            src="/logo-bantul.png"
            alt="Kedungjati Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="text-lg font-bold">
            <h2>Kedungjati</h2>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li>
            <Link href="/" className="rounded-xl px-2 hover:bg-white/50">
              Home
            </Link>
          </li>
          <li>
            <Link href="/lembah_oyo" className="rounded-xl px-2 hover:bg-white/50">
              Wisata
            </Link>
          </li>
          <li>
            <Link href="/" className="rounded-xl px-2 hover:bg-white/50">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden focus:outline-none "
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden bg-black/20 text-white w-full px-6 pb-4 pt-2 transition-all`}
        >
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/lembah_oyo" onClick={() => setIsMobileMenuOpen(false)}>
                Wisata
              </Link>
            </li>
            <li>
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
