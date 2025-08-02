'use client'; // for Next.js App Router

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-cyan-100 bg-opacity-90' : 'bg-black/15'
      }`}
    >
      <nav
        className={`max-w-7xl mx-auto pl-4 pr-10 py-4 flex justify-between items-center ${
          isScrolled ? 'text-black' : 'text-white'
        }`}
      >
        {/* Logo and Title */}
        <div className="flex items-center gap-4">
          <Image
            src="/logo-bantul.png"
            alt="Kedungjati Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="text-lg font-bold">Kedungjati</div>
        </div>

        {/* Menu */}
        <ul className="flex gap-6">
          <li>
            <Link href="/" className="rounded-xl px-2 hover:bg-white/50">
              Home
            </Link>
          </li>
          <li>
            <Link href="/wisata" className="rounded-xl px-2 hover:bg-white/50">
              Wisata
            </Link>
          </li>
          <li>
            <Link href="/" className="rounded-xl px-2 hover:bg-white/50">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
