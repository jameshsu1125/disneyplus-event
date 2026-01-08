import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SlideButton from './sliderButton';

type TProps = {
  item: string;
  setState: React.Dispatch<React.SetStateAction<number>>;
};

const Carousel = forwardRef(({ item, setState }: TProps, ref) => {
  const swiperRef = useRef<SwiperType | null>(null);

  const onSlideAction = useCallback(
    (direction: string) => {
      if (direction === 'next') swiperRef.current?.slideNext();
      else swiperRef.current?.slidePrev();
    },
    [swiperRef],
  );

  useImperativeHandle(ref, () => ({
    slideTo(index: number) {
      swiperRef.current?.slideTo(index);
    },
  }));

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
            onSlideChange={(swiper) => {
              setState(swiper.realIndex);
            }}
            onSwiper={(swiper) => {
              if (!swiperRef.current) swiperRef.current = swiper;
            }}
            navigation
          >
            {[...new Array(5).keys()].map((index) => (
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
