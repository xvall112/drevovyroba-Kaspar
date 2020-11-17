import React from "react"
import SwiperCore, { EffectCube, Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "../../../node_modules/swiper/swiper.scss"
import "../../../node_modules/swiper/components/effect-cube/effect-cube.scss"
import "../../../node_modules/swiper/components/navigation/navigation.scss"
import Img from "gatsby-image"
import styled from "styled-components"

SwiperCore.use([EffectCube, Navigation])

const Fotogalerie = ({ img }) => {
  return (
    <Wrapper>
      <h4>Hotové projekty</h4>
      <Swiper navigation spaceBetween={0} slidesPerView={1}>
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
