'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white2 text-gray-700 pt-10 border-t mt-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        <div>
          <h2 className="text-xl font-bold mb-3 text-green-700">Kedungjati</h2>
          <p className="text-sm">
            Platform informasi wisata dan potensi desa Kedungjati untuk para wisatawan dan masyarakat umum.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Menu</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/">Beranda</Link></li>
            <li><Link href="#features">Fitur</Link></li>
            <li><Link href="#maps">Peta</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Kontak</h3>
          <ul className="text-sm space-y-1">
            <li>Email: <a href="mailto:info@kedungjati.id">info@kedungjati.id</a></li>
            <li>WhatsApp: <a href="https://wa.me/628123456789">+62 812 3456 789</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Follow Us On</h3>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/facebook.svg" alt="Facebook" className="w-6 h-6 hover:scale-110 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/tiktok.svg" alt="Twitter" className="w-6 h-6 hover:scale-110 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/instagram.svg" alt="Instagram" className="w-6 h-6 hover:scale-110 transition" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-700 text-center text-sm py-5 text-white mt-10 border-t pt-5">
        © {new Date().getFullYear()} Kedungjati | Dibuat oleh Tim KKN Kedungjati
      </div>
    </footer>
  );
}
