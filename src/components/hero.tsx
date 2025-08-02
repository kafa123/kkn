'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage: string;
}

export default function Hero({
  title,
  subtitle = 'Explore Up',
  description = '~ Oya River, Kedung Jati ~',
  backgroundImage,
}: HeroProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      const letters = titleRef.current.querySelectorAll('span');
      gsap.from(letters, {
        y: -100,
        opacity: 0,
        stagger: 0.05,
        duration: 0.6,
        ease: 'back.out(1.7)',
      });
    }
  }, []);

  return (
    <section
      className="relative h-[90vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div className="text-center text-white">
          {subtitle && <h2 className="text-xl font-light">{subtitle}</h2>}

          <h1 ref={titleRef} className="text-4xl md:text-6xl font-bold mt-2">
            {title.split('').map((char, i) => (
              <span key={i} className="inline-block">
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>

          {description && (
            <p className="mt-2 text-sm italic">{description}</p>
          )}
        </div>
      </div>
    </section>
  );
}
