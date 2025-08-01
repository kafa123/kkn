'use client'; // for Next.js App Router

import { useEffect, useState } from 'react';

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
        isScrolled ? 'bg-white bg-opacity-90' : 'bg-transparent'
      }`}
    >
      <nav className={`max-w-7xl mx-auto pl-4 pr-10 py-4 flex justify-between items-center ${isScrolled ?'text-black':'text-white'}`} >
        <div className="text-lg font-bold">Kedungjati</div>
        <ul className="flex gap-6">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
