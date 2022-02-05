import React, { useRef } from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import SwiperCore, { Navigation } from "swiper";
import { Image } from "/src/elements";
import { StyledSider, StyledButton, SlyderWrapper } from "./styled";

function Slider({ images, width=200, height=257 }) {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  SwiperCore.use([Navigation]);

  return (
    <SlyderWrapper width={width}>
      <StyledButton left ref={navigationPrevRef} title="Назад">
        &lt;
      </StyledButton>
      <StyledButton right ref={navigationNextRef} title="Вперёд">
        &gt;
      </StyledButton>
      <StyledSider
        width={width}
        height={height}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current
        }}
        freeMode
        watchSlidesProgress
        slidesPerView={1}
        spaceBetween={20}
        loop
      >
        {images &&
          images.length &&
          images.map((image) => (
            <SwiperSlide key={image}>
              <Image
                src={image}
                alt="изображение продукта"                
                height={height}
                maxWidth={width}
              />
            </SwiperSlide>
          ))}
      </StyledSider>
    </SlyderWrapper>
  );
}

export default Slider;
