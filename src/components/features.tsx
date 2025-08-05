'use client';

import { useState } from 'react';

const features = [
  {
    icon: '/price.svg',
    title: 'Affordable Price',
    placeholder: "Nikmati semua aktivitas dengan biaya ramah kantong",
    description: "Free HTM, Parkir: Rp5.000 motor / Rp10.000 mobil",
  },
  {
    icon: '/canoe.svg',
    title: 'Adventures',
    placeholder: "Petualangan seru ke spot tersembunyi di Yogyakarta.",
    description: "Kano: Rp10.000/orang, tipe: single, double, 3-4 orang, perahu",
  },
  {
    icon: '/service.svg',
    title: '24/7 Services',
    placeholder: "Layanan nonstop yang siap membantu kapan saja.",
    description: "Petugas standby dan jaga 24/7",
  },
  {
    icon: '/camp.svg',
    title: 'Camping',
    placeholder: "Bermalam di alam terbuka di bawah langit berbintang.",
    description: "Camping: Rp10.000/orang, tenda beragam tipe dan harga",
  },
  {
    icon: '/Fishing.svg',
    title: 'Fishing',
    placeholder: "Santai memancing di perairan tenang dan asri.",
    description: "Mancing gratis, dilarang nyetrum dan patuhi peraturan",
  },
  {
    icon: '/toilet.svg',
    title: 'Facility',
    placeholder: "Fasilitas lengkap dan nyaman untuk pengunjung",
    description: "Parkir, toilet, warung, camping ground, pos jaga",
  },
];

export function Features() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);


  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 px-6 py-10 max-w-4xl mx-auto">
      {features.map((f, idx) => {
        const isExpanded = expandedIndex === idx;

        return (
          <div
            key={idx}
            onClick={() => setExpandedIndex(isExpanded ? null : idx)}
            className={`p-6 rounded-lg shadow cursor-pointer transition-transform duration-500 ease-in-out
    flex flex-col items-center
    ${isExpanded ? 'bg-cyan-200 text-gray-900 scale-[1.02] rotate-y-[360deg]' : 'bg-cyan-50 text-gray-700 scale-100 rotate-y-0'}
  `}
          >
            <img src={f.icon} alt={f.title} className="w-12 h-12 mb-2 text-center transition-transform duration-500 ease-in-out" />
            <h3 className="font-semibold text-lg">{f.title}</h3>
            <p
              className={`font-light text-sm mt-1 text-center transition-all duration-500 ease-in-out
      ${isExpanded ? 'opacity-100' : 'opacity-80'}
    `}
            >
              {isExpanded ? f.description : f.placeholder}
            </p>
          </div>

        );
      })}
    </div>
  );
}
