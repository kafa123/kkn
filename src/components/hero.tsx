'use client'

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      const letters = titleRef.current.querySelectorAll('span');
      gsap.from(letters, {
        y: -100,
        opacity: 0,
        stagger: 0.05,
        duration: 0.6,
        ease: 'back.out(1.7)'
      });
    }
  }, []);

  const title = "To The Unknown";
  
  return (
    <section
      className="relative h-[90vh] bg-cover bg-center"
      style={{ backgroundImage: `url('/Bagus edit.jpg')` }}
    >
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-xl font-light">Explore Up</h2>
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold mt-2"
          >
            {title.split('').map((char, i) => (
              <span key={i} className="inline-block">
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>
          <p className="mt-2 text-sm italic">~ Oya River, Kedung Jati ~</p>
        </div>
      </div>
    </section>
  );
}
