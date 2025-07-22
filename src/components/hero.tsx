'use client';

export default function Hero() {
  return (
    <section className="relative h-[90vh] bg-cover bg-center" style={{ backgroundImage: `url('/Bagus edit.jpg')` }}>
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-xl font-light">Explore Up</h2>
          <h1 className="text-4xl md:text-6xl font-bold mt-2">To The Unknown</h1>
          <p className="mt-2 text-sm italic">~ Oya River, Kedung Jati ~</p>
        </div>
      </div>
    </section>
  );
}