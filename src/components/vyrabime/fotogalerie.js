import React from "react"
import SwiperCore, { Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.scss"
import "swiper/components/effect-cube/effect-cube.scss"
import "swiper/components/navigation/navigation.scss"
import "swiper/components/pagination/pagination.scss"
import Img from "gatsby-image"
import styled from "styled-components"

SwiperCore.use([Navigation, Pagination])

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
