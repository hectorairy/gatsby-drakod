import React, { useRef } from "react"
import Carousel from "react-tiny-slider"
import { testimonials } from "../../../data/testimonials"
import { Testimonial } from "./Testimonial"
import {
  ButtonLeft,
  ButtonRight,
  SectionTestimonials,
  SideBar,
  TextTestimonials,
  TitleTestimonials,
} from "./TestimonialsElements"

export const Testimonials = () => {
  const carousel = useRef(null)
  const onGoTo = dir => carousel.current.goTo(dir)

  return (
    <SectionTestimonials>
      <SideBar>
        <TitleTestimonials>¡Nuestros clientes nos quieren!</TitleTestimonials>
        <TextTestimonials>¿Quieres saber porqué?</TextTestimonials>
      </SideBar>
      <div>
        <Carousel
          swipeAngle={false}
          items={1}
          mouseDrag
          ref={carousel}
          controls={false}
          nav={false}
        >
          {testimonials.map(testimonial => {
            return <Testimonial key={testimonial.id} {...testimonial} />
          })}
        </Carousel>
        <ButtonLeft onClick={() => onGoTo("prev")} />
        <ButtonRight onClick={() => onGoTo("next")} />
      </div>
    </SectionTestimonials>
  )
}
