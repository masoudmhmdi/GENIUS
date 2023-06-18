import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { useSwiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Box } from '@mui/material';
function Slider() {
  const swiper = useSwiper();
  return (
    <Swiper
      // install Swiper modules
      style={{
        borderRadius: '12px',
      }}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <Box sx={{ width: '100%', height: '100%' }}>
          <img
            src="/slider1.png"
            alt=""
            style={{ width: '100%', height: '100%' }}
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box sx={{ width: '100%', height: '100%' }}>
          <img
            src="/slider1.png"
            alt=""
            style={{ width: '100%', height: '100%' }}
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box sx={{ width: '100%', height: '100%' }}>
          <img
            src="/slider1.png"
            alt=""
            style={{ width: '100%', height: '100%' }}
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box sx={{ width: '100%', height: '100%' }}>
          <img
            src="/slider1.png"
            alt=""
            style={{ width: '100%', height: '100%' }}
          />
        </Box>
      </SwiperSlide>
      <div className="swiper-button-prev swiper-button-white"></div>
      or
      <div className="swiper-button-next swiper-button-black"></div>
    </Swiper>
  );
}

export default Slider;
