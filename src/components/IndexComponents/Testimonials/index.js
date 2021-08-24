import React, { useRef } from "react"
import TinySlider from "tiny-slider-react"
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
  const settings = {
    lazyload: true,
    nav: false,
    mouseDrag: true,
    controls: false, // remove built-in nav buttons
  }
  const onGoTo = dir => carousel.current.slider.goTo(dir)

  return (
    <SectionTestimonials>
      <SideBar>
        <TitleTestimonials>
          ¡La opinión de nuestros clientes nos avala!
        </TitleTestimonials>
        <TextTestimonials>¿Quieres saber porqué?</TextTestimonials>
      </SideBar>
      <div>
        <TinySlider settings={settings} ref={carousel}>
          {testimonials.map(testimonial => {
            return <Testimonial key={testimonial.id} {...testimonial} />
          })}
        </TinySlider>
        <ButtonLeft onClick={() => onGoTo("prev")} />
        <ButtonRight onClick={() => onGoTo("next")} />
      </div>
    </SectionTestimonials>
  )
}
