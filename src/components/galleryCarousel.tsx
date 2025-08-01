'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/parallax';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type GalleryCarouselProps = {
  images: string[];
};

export default function GalleryCarousel({ images }: GalleryCarouselProps) {
  // Clone first and last images to simulate looping
  const slides = [
    images[images.length - 1], // last image
    ...images,
    images[0], // first image
  ];

  return (
    <div className="flex align-middle justify-center h-screen">
      <Swiper
        className="w-full h-[80vh]"
        modules={[Parallax, Navigation, Pagination, Autoplay]}
        slidesPerView={1.5}
        centeredSlides={true}
        initialSlide={1} // because we added a dummy at index 0
        speed={500}
        parallax={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => {
          // Simulate loop
          if (swiper.realIndex === 0) {
            setTimeout(() => swiper.slideTo(slides.length - 2, 0), 0); // Jump to last real slide
          } else if (swiper.realIndex === slides.length - 1) {
            setTimeout(() => swiper.slideTo(1, 0), 0); // Jump to first real slide
          }
        }}
      >
        {slides.map((src, idx) => (
          <SwiperSlide key={idx} className="overflow-hidden h-full relative">
            <div className="w-full h-full img-wrapper">
              <img
                src={src}
                alt={`Slide ${idx}`}
                className="object-cover w-full h-full"
                data-swiper-parallax="30%"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
