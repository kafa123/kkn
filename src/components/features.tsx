'use client';

const features = [
  { icon: '/price.svg', title: 'Affordable Price', description: "lorem ipsum sjsbjsbsjnssbjbsh" },
  { icon: '/canoe.svg', title: 'Adventures', description: "lorem ipsum sjsbjsbsjnssbjbsh"},
  { icon: '/service.svg', title: '24/7 Services', description: "lorem ipsum sjsbjsbsjnssbjbsh" },
  { icon: '/camp.svg', title: 'Camping',description: "lorem ipsum sjsbjsbsjnssbjbsh" },
  { icon: '/Fishing.svg', title: 'Fishing' ,description: "lorem ipsum sjsbjsbsjnssbjbsh"},
  { icon: '/mountain.svg', title: 'Good View' ,description: "lorem ipsum sjsbjsbsjnssbjbsh"},
];

export function Features() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 px-6 py-10 max-w-4xl mx-auto">   
      {features.map((f, idx) => (
        <div key={idx} className="bg-[linear-gradient(to_bottom,#4F6F52,#A8B62E)] p-6 rounded-lg shadow flex flex-col items-center">
          <img src={f.icon} alt={f.title} className="w-12 h-12 mb-2" />
          <h3 className="font-semibold text-gray-800">{f.title}</h3>
          <p className="font-light text-white">{f.description}</p>
        </div>
      ))}
    </div>
  );
}

