import React from "react"
import SwiperCore, { EffectCube } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "../../../node_modules/swiper/swiper.scss"
import "../../../node_modules/swiper/components/effect-cube/effect-cube.scss"
import Img from "gatsby-image"
import styled from "styled-components"

SwiperCore.use([EffectCube])

const Fotogalerie = ({ img }) => {
  return (
    <Wrapper>
      <h4>Fotogalerie</h4>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        effect="cube"
        onSlideChange={() => console.log("slide change")}
        onSwiper={swiper => console.log(swiper)}
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
  margin-top: 4rem;
  h4 {
    color: var(--clr-primary);
  }
`
const Foto = styled(Img)`
  height: 400px;
`
export default Fotogalerie
