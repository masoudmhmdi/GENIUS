/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { useRef, useCallback, MutableRefObject } from 'react';
import { useSwiper } from 'swiper/react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
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
          height: '400px',
          position: 'relative',
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
        <Box
          sx={{
            position: 'absolute',
            borderRadius: '4px',
            overflow: 'hidden',
            top: '20px',
            left: '20px',
            zIndex: '2',
          }}
        >
          <Button
            size="small"
            color="secondary"
            variant="contained"
            sx={{ borderRadius: '0', minWidth: '40px', maxWidth: '40px' }}
            onClick={() => {
              handleNext(sliderRef);
            }}
          >
            <NavigateNextIcon />
          </Button>
          <Button
            size="small"
            color="secondary"
            variant="contained"
            sx={{ borderRadius: '0', minWidth: '40px', maxWidth: '40px' }}
            onClick={() => {
              handlePrev(sliderRef);
            }}
          >
            <NavigateBeforeIcon />
          </Button>
        </Box>
      </Swiper>
    </>
  );
}

export default Slider;
