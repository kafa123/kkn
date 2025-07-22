
import Hero from '../components/hero';
import { Section } from '../components/section';
import { Features } from '../components/features';

export default function HomePage() {
  return (
    <div className="font-sans">
      <Hero />
      <Section title="Make Yours Destination" image="/contoh.jpg" />
      <h2 className="text-center text-xl mt-10 font-bold">Countless Experience</h2>
      <Features />
      <Section title="The Fact and History about Oya River" image="">
        <p className="max-w-3xl mx-auto text-sm text-gray-700 mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesent eget dolor leo. Nunc a dolor id ante viverra dignissim nec in ligula.
        </p>
      </Section>
      {/* <section className="relative h-[60vh] bg-cover bg-center mt-10" style={{ backgroundImage: `url('/boy.jpg')` }}>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h2 className="text-white text-2xl md:text-4xl font-semibold">Let's Explore This World</h2>
        </div>
      </section> */}
    </div>
  );
}
