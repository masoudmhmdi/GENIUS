/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { useRef, useCallback, MutableRefObject } from 'react';
import { useSwiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Box, Button } from '@mui/material';
function Slider() {
  const sliderRef = useRef(null);
  const handlePrev = useCallback((sliderRef: MutableRefObject<any>) => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);
  const handleNext = useCallback((sliderRef: MutableRefObject<any>) => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <>
      <Swiper
        ref={sliderRef}
        // install Swiper modules
        style={{
          borderRadius: '12px',
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
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
      </Swiper>
      <Button
        onClick={() => {
          handleNext(sliderRef);
        }}
      >
        next
      </Button>
      <Button
        onClick={() => {
          handlePrev(sliderRef);
        }}
      >
        prev
      </Button>
    </>
  );
}

export default Slider;
