'use client'

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type SwiperCore from 'swiper';
import { CardCarousel } from '@/components/main/CardCarousel';
import css from './carouselMain.module.css';
import 'swiper/css';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

export function CarouselMain() {
    const swiperRef = useRef<SwiperCore | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      title: "Здесь будет какой-то текст",
      subtitle: "Продающий и цепляющий",
      image: "/main/Person.svg"
    },
    {
        id: 2,
        title: "Здесь будет какой-то текст",
        subtitle: "Продающий и цепляющий",
        image: "/main/Person.svg"
      },
      {
        id: 3,
        title: "Здесь будет какой-то текст",
        subtitle: "Продающий и цепляющий",
        image: "/main/Person.svg"
      },
      {
        id: 4,
        title: "Здесь будет какой-то текст",
        subtitle: "Продающий и цепляющий",
        image: "/main/Person.svg"
      },
  ];

  return (
    <div className={css.container}>
      <Swiper
        spaceBetween={40}
        slidesPerView={"auto"}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className={css.swiper}
        centeredSlides={false}
        freeMode={true}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className={css.slide} style={{ width: 'auto' }}>
            <CardCarousel {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className={css.pagination}>
        {slides.map((_, index) => (
          <div 
            key={index}
            className={`${css.paginationItem} ${
              index === activeIndex ? css.active : ''
            }`}
            onClick={() => {
              swiperRef.current?.slideTo(index);
              setActiveIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
}