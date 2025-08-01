'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
interface SectionProps {
  title: string;
  image: string;
  children?: React.ReactNode;
}

export function Section({ title, image, children }: SectionProps) {

      useEffect(() => {
        AOS.init({    // whether animation should happen only once
        // offset (in px) from the original trigger point
        });
      }, []);
    
  
  return (
    <section className="py-16 text-center" data-aos="fade-down" data-aos-mirror="true" data-aos-once="false" data-aos-delay="400">
      <h2 className="text-xl font-bold mb-6">{title}</h2>
      <div className="relative mx-auto max-w-4xl w-full">
        <img
          src={image}
          alt={title}
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />
        {children && (
          <div className="absolute inset-0 flex items-end justify-center">
            <div className="bg-white/70 px-6 py-4 rounded-b-lg shadow text-base font-medium">
              {children}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
