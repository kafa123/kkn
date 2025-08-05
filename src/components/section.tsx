'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

interface SectionProps {
  title: string;
  image?: string;
  children?: React.ReactNode;
}

export function Section({ title, image, children }: SectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      className="py-16 text-center"
      data-aos="fade-down"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-delay="400"
    >
      <h2 className="text-xl font-bold mb-6">{title}</h2>

      <div className="relative mx-auto max-w-4xl w-full">
        <img
          src={image}
          alt={title}
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />
        {children && (
          <div className="absolute inset-0 flex items-end justify-center">
            <div className="bg-white/70 px-6 sm:py-2 lg:py-4 rounded-b-lg shadow text-base font-medium w-full">
              <div
                className={`transition-all duration-300 ease-in-out text-gray-700 text-sm overflow-hidden ${
                  isExpanded ? 'max-h-full' : 'max-h-[4.5rem] sm:max-h-full'
                }`}
              >
                {children}
              </div>
              <button
                onClick={() => setIsExpanded((prev) => !prev)}
                className="mt-2 text-blue-500 underline sm:hidden"
              >
                {isExpanded ? 'Show less' : 'Read more'}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
