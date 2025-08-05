'use client';

import { useEffect, useState } from 'react';
import GalleryCarousel from './galleryCarousel';

type ImageItem = {
  ImageURL: string;
};

export default function GallerySection() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    fetch('https://script.googleusercontent.com/a/macros/mail.ugm.ac.id/echo?user_content_key=AehSKLjfvHDjiW_8Rw7zPcXAv4tuPnm0pVVE3nEX-Uh51tAO9peJI3IErTacYzy0U8Ggnu4joXrWhqG8rAzdIojiNU12Ou64woIKyi3W0POUz1jVYDEf8POIkP_6T8eUdoZ5WAB_e614_iBNeJyW3Eti9uqXMRbLYU0RgOqrvZ6jItHXaPBMb3kPFfQR9Q1s0MotcvUbwravq55q9nVghADsJCs0xeOWQIzkVZmhMA5c7BIPAY9MuXBpKclrdAM-IVLYZjmgn8zDwBJZr4t-lj6sJ8RmAJX17kNlMLvzBVIUEpsOQymb5R7oPLA4ADfTZQ&lib=MPYFuA1cQ5_hRGrS6nxpUddTQ8ws31GAd')
      .then(res => res.json())
      .then((json: { data: ImageItem[] }) => {
        const urls = json.data.map(item => item.ImageURL);
        setImages(urls);
      })
      .catch(err => {
        console.error('Failed to fetch gallery data:', err);
      });
  }, []);

  if (images.length === 0) return <p>Loading...</p>;

  return <GalleryCarousel images={images} />;
}
