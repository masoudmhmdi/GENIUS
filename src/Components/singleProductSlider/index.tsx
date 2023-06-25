/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { type Swiper as SwiperRef } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { Box } from '@mui/material';

export default function SingleProductSlider({ images }: { images: string[] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperRef>();

  return (
    <Box sx={{ width: '100%' }}>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map((img, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={img} alt="slider-product-img" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={(i) => setThumbsSwiper(i)}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((img, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={img} alt="slider-product-img" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
}
