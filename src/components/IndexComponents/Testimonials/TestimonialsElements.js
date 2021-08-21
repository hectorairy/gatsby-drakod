import styled from "@emotion/styled"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"

export const SectionTestimonials = styled.section`
  max-width: 1200px;
  margin-top: 6rem;
  margin-bottom: 6rem;
  width: 95%;
  text-align: center;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 5rem;
  }
`
export const TitleTestimonials = styled.h3`
  color: #000;
  font-weight: 500;
  font-size: 2.3rem;
`
export const TextTestimonials = styled.p`
  color: #a7a9c0;
  @media (max-width: 992px) {
    text-align: justify;
  }
`

export const SideBar = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ButtonLeft = styled(FaArrowAltCircleLeft)`
  color: #8338ec;
  margin-right: 1rem;
  font-size: 2rem;
  cursor: pointer;
`
export const ButtonRight = styled(FaArrowAltCircleRight)`
  color: #8338ec;
  font-size: 2rem;
  cursor: pointer;
`
