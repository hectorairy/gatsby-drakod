import React from "react"
import {
  BannerSection,
  BannerOverlay,
  BannerBg,
  BannerContainer,
} from "./BannerElements"

export const Banner = ({ imageBg, section, title, subtitle }) => {
  return (
    <BannerSection>
      <BannerOverlay>
        <BannerBg tag="div" fluid={imageBg.sharp.fluid}></BannerBg>
      </BannerOverlay>
      <BannerContainer>
        <p className="uppercase">{section}</p>

        <h1>{title}</h1>
        <p>{subtitle}</p>
      </BannerContainer>
    </BannerSection>
  )
}
