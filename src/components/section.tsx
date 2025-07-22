'use client';

interface SectionProps {
  title: string;
  image: string;
  children?: React.ReactNode;
}

export function Section({ title, image, children }: SectionProps) {
  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-xl font-bold mb-6">{title}</h2>
      <img src={image} alt={title} className="mx-auto rounded-lg shadow-lg mb-6 max-w-3xl w-full" />
      {children}
    </section>
  );
}
