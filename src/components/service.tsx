'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const services = [
  {
    image: '/contoh canoe.jpg',
    title: 'Canoe',
    points: [
      'Harga Sewa Unit: Rp 15.000/30min',
      'Harga Sewa Group: Rp 10.000/org',
      'Durasi: 15 menit',
    ],
  },
  {
    image: '/contoh canoe.jpg',
    title: 'Camping',
    points: [
      'Tenda disediakan oleh pengunjung',
      'Biaya sewa lahan: Rp 10.000/malam',
      'Area datar & aman',
    ],
  },
  {
    image: '/contoh canoe.jpg',
    title: 'Mancing',
    points: [
      'Harga Sewa Lokasi: Rp 5.000/org',
      'Harga Sewa Alat: Rp 10.000/org',
      'Durasi: 1 s/d 6 jam',
    ],
  },
];

export function Service() {
  useEffect(() => {
    AOS.init({    // whether animation should happen only once
    });
  }, []);
  return (
    <section className="py-16 px-6">
      <h2 className="text-center text-xl font-bold mb-12">Our Service</h2>

      <div className="space-y-20">
        {services.map((service, index) => {
          const isEven = index % 2 === 1;

          return (
            <div

              key={index}
              className={`flex flex-col md:flex-row items-center gap-10 ${isEven ? 'md:flex-row-reverse' : ''
                }`}
            >
              {/* Image with colored shadow box */}
              <div className="relative w-full md:w-1/2">
                <img
                  data-aos="fade-down"
                  data-aos-delay={`${400 + index * 100}`}
                  data-aos-once="false"
                  data-aos-mirror="true"
                  src={service.image}
                  alt={service.title}
                  className="w-full h-auto rounded-lg relative z-10 shadow-lg"
                />
                <div
                  data-aos="fade-down"
                  data-aos-delay={`${400 + index * 100}`}
                  data-aos-once="false"
                  data-aos-mirror="true"
                  className={`absolute top-4 ${isEven ? 'right-4' : 'left-4'
                    } w-full h-full bg-cyan-200 z-0 rounded-lg shadow-2xl`}
                />
              </div>

              {/* Text Content */}
              <div className="md:w-1/2 text-left">
                <h3 className="text-2xl font-semibold mb-4" data-aos="fade-down"
                  data-aos-delay={`${500 + index * 100}`}
                  data-aos-once="false"
                  data-aos-mirror="true">{service.title}</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  {service.points.map((point, idx) => (
                    <li key={idx} data-aos="fade-down"
                      data-aos-delay={`${500 + index * 100 + idx * 100}`}
                      data-aos-once="false"
                      data-aos-mirror="true">{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
