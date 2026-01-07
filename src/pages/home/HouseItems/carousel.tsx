import { memo, useCallback, useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SlideButton from './sliderButton';

const Carousel = memo(({ item }: { item: string }) => {
  const swiperRef = useRef<SwiperType | null>(null);

  const onSlideAction = useCallback(
    (direction: string) => {
      if (direction === 'next') swiperRef.current?.slideNext();
      else swiperRef.current?.slidePrev();
    },
    [swiperRef],
  );

  return (
    <div className='carousel'>
      <div>
        <SlideButton onClick={() => onSlideAction('prev')} type='prev' />
      </div>
      <div>
        <div>
          <Swiper
            loop
            style={{ height: '100%' }}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => {
              if (!swiperRef.current) swiperRef.current = swiper;
            }}
            navigation
          >
            {[...new Array(4).keys()].map((index) => (
              <SwiperSlide key={`slider-${index}`}>
                <div className={`album-${item}-${index}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div>
        <SlideButton onClick={() => onSlideAction('next')} type='next' />
      </div>
    </div>
  );
});
export default Carousel;
