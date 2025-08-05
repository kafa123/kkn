"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Hero from '../../components/hero';
import { Section } from '../../components/section';
import { Features } from '../../components/features';
import { Service } from '../../components/service';
import GalleryCarousel from '@/components/galleryCarousel';

export default function WisataPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 120,
    });
  }, []);

  return (
    <div className="relative overflow-hidden">
      <Hero
        title='To The Unknown'
        backgroundImage='/images/Hero_wisata.JPG'
      />
      <div className='px-4 sm:px-6 lg:px-8'>
        <Section data-aos="fade-down" title="Make Yours Destination" image="/contoh.jpg" />
        <h2 className="text-center text-xl mt-10 font-bold" data-aos="fade-up">
          Countless Experience
        </h2>
        <Features />
        <Section
          title="The Fact and History about Oya River"
          image="/kedung_parangan.JPG"
        >
          <p
            className="max-w-4xl mx-auto text-l text-gray-700 mt-4 "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Lembah Oyo atau Kedung Parangan Merupakan salah satu destinasi wisata “hidden gem” yang terletak di Dusun Kedung Jati, Kalurahan Selopamioro, Kapanewon Imogiri, Kabupaten Bantul, Daerah Istimewa Yogyakarta. Wisata ini dikelilingi pebukitan karst dan aliran Sungai Oya yang jernih berwarna kehijauan.
          </p>
        </Section>
        <Service />
        <h2 className="text-center text-xl my-16 font-bold" data-aos="fade-up">
          Our Gallery
        </h2>
                </div>
        <GalleryCarousel
          images={[
            "/canoe_1.jpg",
            "/canoe_2.jpg",
            "/canoe_3.jpg",
          ]}
        />

        <div className='px-4 sm:px-6 lg:px-8'>
        <h2 className="text-center text-xl mt-16 font-bold" data-aos="fade-up">
          Our Location
        </h2>
        <div className="relative w-full max-w-4xl mx-auto my-16 aspect-video shadow-2xl rounded-2xl" data-aos="fade-up">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-2xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1745.4130933125703!2d110.42417884349392!3d-7.9537401821589855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a55006854b895%3A0x6db348fddc873395!2sLembah%20Oyo%20Kedung%20Jati!5e1!3m2!1sen!2sid!4v1753869973080!5m2!1sen!2sid"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>

    </div>
  );
}
