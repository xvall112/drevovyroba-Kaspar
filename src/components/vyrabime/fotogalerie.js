import React from "react"
import SwiperCore, { Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.scss"

import Img from "gatsby-image"
import styled from "styled-components"

SwiperCore.use([Navigation])

const Fotogalerie = ({ img }) => {
  return (
    <Wrapper>
      <h4>Hotové projekty</h4>
      <Swiper
        navigation
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {img.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <Foto fluid={image.fluid} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  /*
  navigation
  */
  :root {
    --swiper-navigation-size: 44px;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    top: 50%;
    width: calc(var(--swiper-navigation-size) / 44 * 27);
    height: var(--swiper-navigation-size);
    margin-top: calc(-1 * var(--swiper-navigation-size) / 2);
    z-index: 10;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--clr-primary);
    &.swiper-button-disabled {
      opacity: 0.35;
      cursor: auto;
      pointer-events: none;
    }
    &:after {
      font-family: swiper-icons;

      font-size: 40px;
      text-transform: none !important;
      letter-spacing: 0;
      text-transform: none;
      font-variant: initial;
      line-height: 1;
    }
  }
  .swiper-button-prev,
  .swiper-container-rtl .swiper-button-next {
    &:after {
      content: "prev";
    }
    left: 10px;
    right: auto;
  }
  .swiper-button-next,
  .swiper-container-rtl .swiper-button-prev {
    &:after {
      content: "next";
    }
    right: 10px;
    left: auto;
  }

  .swiper-button-lock {
    display: none;
  }

  margin-top: 4rem;
  ul {
    list-style-type: none !important;
  }

  h4 {
    color: var(--clr-primary);
  }
`
const Foto = styled(Img)`
  height: 400px;
`
export default Fotogalerie
