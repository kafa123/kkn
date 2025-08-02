'use client'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link'

import Hero from '../components/hero';

export default function HomePage() {
    useEffect(() => {
      AOS.init({
        duration: 800,
        offset: 120,
        once:false,
        mirror:true
      });
    }, []);
    
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Desa Kedungjati"
        subtitle="Selamat Datang di Website Resmi"
        description="~ Menyajikan Informasi dan Potensi Desa ~"
        backgroundImage="/images/hero-kedungjati.jpg"
      />

      {/* Tambahkan section lainnya di sini jika perlu */}
      <section className="p-16 text-center">
        <h2 className="text-2xl font-semibold mb-4"
        data-aos="fade-down">
          Tentang Desa Kedungjati</h2>
        <hr className='max-w-2xl mx-auto my-6 border-t-4 border-cyan-300 rounded-4xl' 
        data-aos="fade-down"
        data-aos-delay="100"/>
        <p className="text-gray-700 max-w-4xl mx-auto"
        data-aos="fade-down"
        data-aos-delay="100">
          Kedung Jati adalah salah satu padukuhan yang berada di Kalurahan Selopamioro, Kapanewon Imogiri, Bantul, DI Yogyakarta. Imogiri Yogyakarta cukup terkenal dengan adanya Makam Raja-raja Mataram yang menjadi wisata religi dan sentra batik yang ramai didatangi pengunjung. Di sisi lain, padukuhan ini menawarkan pemandangan alam yang begitu berbeda dari kebanyakan tempat di Yogyakarta yang diketahui banyak orang. Berada di wilayah Yogyakarta yang berbukit-bukit, Kedung Jati memiliki keunikannya sendiri, seperti pemandangan tebing-tebing karst yang megah dan dilewati Sungai Oya yang memiliki warna hijau cantik ketika musim kemarau.
        </p>
      </section>

{/* <section className='bg-cyan-400'>
  <h2 className="text-center">Visi & Misi</h2>
  <hr className='max-w-3xs mx-auto border-t-4 border-white rounded-4xl'/>
  <div className='grid grid-cols-3'>

  </div>
</section> */}

      <section className='px-16 bg-linear-180 from-cyan-300 to-cyan-400'>
        <h2 className='text-2xl font-semibold pt-16 pb-6 text-white'
        data-aos="fade-down"
        data-aos-delay="100">Potensi Alam</h2>
        <hr className='max-w-3xs border-t-4 border-white rounded-4xl' 
        data-aos="fade-down"
        data-aos-delay="100"/>
        <p className='py-16 text-white'
        data-aos="fade-down"
        data-aos-delay="100">
          Masyarakat Kedung Jati sebagian besar menghabiskan waktu mereka di ladang setiap harinya. Aktivitas pertanian menjadi bagian penting dari kehidupan sehari-hari, di mana mereka menanam dan memanen hasil bumi secara bergotong royong atau bersama keluarga. Ketekunan dan kebersamaan menjadi ciri khas masyarakatnya dalam menjaga keberlangsungan lahan pertanian yang telah diwariskan turun-temurun.

          Hasil alam yang paling banyak ditemukan di Kedung Jati antara lain kacang tanah, jagung, ketela, dan lombok. Komoditas tersebut tidak hanya dijual di pasar lokal, tetapi juga banyak diolah menjadi makanan tradisional. Ketela diolah menjadi *gethuk*, kacang tanah direbus untuk konsumsi harian, dan singkong difermentasi menjadi tape. Olahan-olahan ini tidak hanya menjadi bagian dari keseharian warga, tetapi juga mencerminkan kearifan lokal yang masih terjaga hingga kini.

          Selain sektor pertanian, Kedung Jati juga memiliki potensi wisata yang menarik, yaitu **Lembah Oyo Kedungjati**. Tempat ini dikenal dengan aliran airnya yang hijau jernih dan suasana alam yang masih asri. Wisatawan yang datang dapat menikmati keindahan alam dengan cara menyusuri aliran air menggunakan kano. Pengalaman menyusuri lembah dengan air yang tenang dan pemandangan yang memukau menjadikan Lembah Oyo sebagai destinasi favorit untuk bersantai dan melepas penat.
        </p>
      </section>

<section
  className="h-[600px] bg-cover bg-center relative my-16"
  style={{ backgroundImage: `url('/images/wisata.JPG')` }}
>
  <div className="absolute inset-0 bg-black/30 z-0" />
  <div className="relative z-10 text-white text-center justify-center py-24 px-4">
    <h2 className="text-4xl font-bold">Wisata Kedungjati</h2>
    <p className="mt-4 text-lg">Nikmati keindahan alam dan budaya Kedungjati</p>
    <Link href="/wisata" passHref>
      <div className="inline-block mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full shadow-md hover:bg-gray-200 transition cursor-pointer">
        Lihat Wisata
      </div>
    </Link>
  </div>
</section>




      <h2 className='m-16 text-center font-semibold'
      data-aos="fade-down"
        data-aos-delay="100">Kedungjati location</h2>
      <iframe
        className="w-full h-[750px] max-w-4xl mx-auto my-16 shadow-2xl rounded-2xl"
        data-aos="fade-down"
        data-aos-delay="200"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13006.647739226653!2d110.41583943197439!3d-7.958933923049797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bab555f7189ef%3A0x36fd402d8081afb5!2sKedung%20Jati%2C%20Selopamioro%2C%20Imogiri%2C%20Bantul%20Regency%2C%20Special%20Region%20of%20Yogyakarta!5e1!3m2!1sen!2sid!4v1754117597526!5m2!1sen!2sid" style={{ border: "0" }} loading="lazy" ></iframe>
    </>
  );
}
